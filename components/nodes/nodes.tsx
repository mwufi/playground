const nodes = [
    {
        type: 'call-api',
        header: 'Call API',
        helpInfo: `
        Description:

Call any external API, make a GET/POST/PATCH request to retrieve/modify data.

Latest Version:

v0.04

Parameters:

method: enum(GET,POST,PATCH)
url: text
headers: List of object
body: List of object
Inputs:

url: text
body: text
Outputs:

api response: any
Base Credit Cost:

0
`,
        params: [
            {
                name: 'method', type: 'choices', choices: [
                    'GET', 'POST', 'PATCH'
                ],
            },
            {
                name: 'url', type: 'text'
            }
        ]
    },
    {

        type: 'output',
        header: 'Output',
        helpInfo: ``,
        params: [
            { name: 'output name', type: 'text', default: 'research_results' },
            {
                name: 'output type', type: 'choices', choices: [
                    'string',
                    'string[]',
                    'any'
                ]
            }
        ]
    }

]