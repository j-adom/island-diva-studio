export default {
    "type": "document",
    "name": "social",
    "title": "Social Links",
    "fields": [
        {
            "type": "array",
            "name": "links",
            "title": "Social Links",
            "description": "A list of social links displayed on the left side.",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "type",
                            "title": "Type",
                            "hidden": true,
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Title",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "icon",
                            "title": "Icon",
                            "description": "Font Awesome icon class name.",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "url",
                            "title": "URL",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "title"
                        }
                    }
                }
            ]
        }
    ],
    "singleInstance": true
}