export const checksums = {
  "content": "v3.5.0--BEi565lUHtv9GUVHnX6a-ahSiwe4dYh4Zmx3j8lnt9g"
}
export const checksumsStructure = {
  "content": "M3rMTazWrA8W9e78nfjdCWFIBkq8M4osVHo3UAPj75Y"
}

export const tables = {
  "content": "_content_content",
  "info": "_content_info"
}

export default {
  "content": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "cover": "string",
      "date": "string",
      "description": "string",
      "draft": "boolean",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string",
      "tags": "json"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}