const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { readFileSync } = require('fs');


const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' });

const schema = buildSchema(schemaString);

const formBannerConfig = {
	fields: [
		{
			name: 'id',
			label: 'ID',
			value: 123
		},
		{
			name: 'name',
			label: 'Name',
			type: 'text'
		},
		{
			name: 'email',
			label: 'Email',
			type: 'email'
		},
		{
			name: 'manager',
			label: 'Manager',
			values: [
				{
					value: 1,
					text: 'Manager1'
				},
				{
					value: 2,
					text: 'Manager2'
				}
			],
		},

		{
			name: 'date',
			label: 'Date',
			type: 'date'
		},
		{
			name: 'id_brand',
            label: 'Brand',
			values: [
				{
					value: 1,
					text: 'PlayZax'
				},
				{
					value: 2,
					text: 'PlayRex'
				}
			],
		},

		{
			name: 'id_size',
            label: 'Size',
			values: [
				{
					value: 1,
					text: 'Small'
				},
				{
					value: 2,
					text: 'Medium'
				},
				{
					value: 3,
					text: 'Big'
				}
			],
		},

		{
			name: 'file',
			label: 'file',
			type: 'file'
		}

	],
	columns: [
		{
			name: 'id',
			label: 'ID',
			sortable: true
		},
		{
			name: 'registrationDate',
			label: 'Registration Date',
			sortable: false
		},
		{
			name: 'login',
			label: 'Login',
			sortable: true
		},
		{
			name: 'managerName',
			label: 'Manager Name',
			sortable: false
		},
		{
			name: 'status',
			label: 'Status',
			sortable: false
		},
		{
			name: 'country',
			label: 'Country',
			sortable: true
		},
		{
			name: 'website',
			label: 'URL',
			sortable: false
		},
		
	],
	groupRows: true,
	sortBy: 'id',
	direction: 1,
	exportUrl: '/users/export',
	options: [
		{
			key: 'edit',
			value: true
		},
        {
            key: 'copy',
            value: true
        },
        {
            key: 'become',
            value: true
        }
    ]
};


const root = {
	getBannersConfig: () => {
		return formBannerConfig;
	},
	
	createNewBanner: params => {
		return [
			{
				name: 'name',
				value: "value"
			}
		]
	},
};

const app = express();


const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

app.use(cors());
app.options('*', cors(corsOptions));

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true
	})
);

app.listen(9006);

console.log('Running a GraphQL API server at http://localhost:9006/graphql');
