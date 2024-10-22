//mock axios for unit test case
const mockAxios = {
    get: jest.fn(() => Promise.resolve({ data: [] })), 
    post: jest.fn(() => Promise.resolve({ data: {} })),
    put: jest.fn(() => Promise.resolve({ data: {} })),
    delete: jest.fn(() => Promise.resolve({ data: {} })),
};

export default mockAxios;
  