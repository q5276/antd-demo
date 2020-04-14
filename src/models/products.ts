export default {
    namespace: 'products',
    state: [
      { name: 'dva', id: 'dva', key: '1' },
      { name: 'antd', id: 'antd', key: '2' },
    ],
    reducers: {
      delete(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
    },
  };