const getproduct = async () => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                products: [
                    {
                        id: 1,
                        product_name: "abc",
                        price: 1234
                    }
                ]
            })
        }, 2000);
    })
}
module.exports = getproduct

