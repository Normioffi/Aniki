/**
 * @interface
 * @description This interface is the JSON response of Kitsu.app errors.
 * @since 1.3.0
 */
interface IKitsuError {
  errors: [
    {
      title: string;
      detail?: string;
      code?: string;
      status: string;
    }
  ];
}

/**
 * @type
 * @description This type returns errors from the Kitsu.app API and module.
 * @since 1.3.0
 */
type TKitsuHandleError = (
  /**
   * @param {object} [errors] - The errors that return the module, including module errors and API errors.
   * @param {Promise<IKitsuError>} [errors.apiError] - The API error(s)
   * @param {unknown} [errors.moduleError] - The module error(s)
   */
  errors: { apiError?: Promise<IKitsuError>; moduleError?: unknown },
  /**
   * @param {number} status - Return the status of the error (including API and module (400 everywhere.))
   */
  status: number
) => Promise<void>;

export * from "./anime/params";
export * from "./anime/result";
export * from "./manga/params";
export * from "./manga/result";
export { IKitsuError, TKitsuHandleError };
