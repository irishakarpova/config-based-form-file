export const formBannerConfig = {
	fields: [
		{
			name: 'id',
			label: 'ID',
			value: "123"
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
					value: '1',
					text: 'Manager1'
				},
				{
					value: "2",
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
					value: '1',
					text: 'Brand 1'
				},
				{
					value: '2',
					text: 'Brand 2'
				}
			],
		},

		{
			name: 'id_size',
            label: 'Size',
			values: [
				{
					value: '1',
					text: 'Small'
				},
				{
					value: "2",
					text: 'Medium'
				},
				{
					value: '3',
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
};
