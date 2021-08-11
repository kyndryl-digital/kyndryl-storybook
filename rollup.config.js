import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';
import multiInput from 'rollup-plugin-multi-input';

const babelConfig = {
    babelrc: false,
    ...{
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        ie: '11',
                    },
                },
            ],
        ],
    },
};

const filesizeConfig = {
    showGzippedSize: true,
    showBrotliSize: false,
    showMinifiedSize: false,
};

// Static assets will vary depending on the application
const copyConfig = {
    targets: [
        { src: 'node_modules/@webcomponents', dest: 'build/node_modules' },
        { src: 'node_modules/systemjs/dist/s.min.js', dest: 'build/node_modules/systemjs/dist' },
        { src: 'public/index.html', dest: 'build' },
    ],
};

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const configs = [
    {
        input: [
            'src/components/wrapper/wrapper.js',
            'src/components/header/header.js',
            'src/components/footer/footer.js',
        ],
        output: {
            dir: 'build/dist',
            format: 'systemjs',
        },
        plugins: [
            multiInput(),
            image(),
            minifyHTML(),
            babel(babelConfig),
            resolve(),
            copy(copyConfig),
        ],
        preserveEntrySignatures: false,
        sourceMap: 'inline',
    },
    // Babel polyfills for older browsers that don't support ES2015+.
    {
        input: 'src/babel-polyfills-nomodule.js',
        output: {
            file: 'build/nomodule/babel-polyfills-nomodule.js',
            format: 'iife',
        },
        plugins: [commonjs({ include: ['node_modules/**'] }), resolve()],
    },
];

for (const config of configs) {
    if (process.env.NODE_ENV !== 'development') {
        config.plugins.push(terser());
    }
    config.plugins.push(filesize(filesizeConfig));
}

export default configs;
