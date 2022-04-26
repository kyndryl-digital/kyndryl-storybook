import { APP_DOMAIN } from '../settings/settings';

const url = require('url');

/**
 * Generic URL formatter function.
 *
 * @param {*} path
 *   Path for formatted URL.
 * @param {*} options
 *   NodeJS URL object.
 * @returns Formatted URL string.
 */
export const formatUrl = (path, options = {}) => {
  const urlObject = {
    host: APP_DOMAIN,
    pathname: path || null,
    ...options,
  };
  const urlStr = url.format(urlObject);
  return urlStr.toString();
};

/**
 * Convert an object to an array of only its values.
 * Used when importing * as OPTIONS in component stories for populating argType dropdowns.
 * @param {*} options
 *  imported variables object
 */
export function createOptionsArray(options = {}) {
  const optionsArray = [];

  Object.keys(options).map((key) => {
    optionsArray.push(options[key]);
  });

  return optionsArray;
}
