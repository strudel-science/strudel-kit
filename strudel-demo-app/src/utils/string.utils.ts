export const removeExtraSlashes = (str: string) => {
  return str.replace(/([^:]\/)\/+/g, "$1")
}