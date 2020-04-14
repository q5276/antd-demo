import { Table, Popconfirm, Button, Tag } from 'antd'

const ProductList = ({onDelete, products}) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, recode) => {
                return (
                    <Popconfirm title="Delete?" onConfirm={()=> onDelete(recode.id)} >
                        <Button>Delete</Button>
                    </Popconfirm>
                );
            },
        },
    ];
      
    return <Table dataSource={products} columns={columns} />
}

export default ProductList;