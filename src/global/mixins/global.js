import { settings } from "../settings";

const url = require("url");

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
  var urlObject = {
    host: settings.domain,
    pathname: path || null,
    ...options,
  };
  var urlStr = url.format(urlObject);
  return urlStr.toString();
};
