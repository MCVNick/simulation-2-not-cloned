module.exports = {
    getHouses: (req, res, next) => {
        req.app.get('db').get_houses()
            .then(houses => res.status(200).send(houses))
            .catch(error => res.status(500).send(console.log('O snap something went wrong in the getHouses controller')))
    },
    addHouse: (req, res, next) => {
        const { name, address, city, state, zipcode } = req.body
        req.app.get('db').create_house(name, address, city, state, zipcode)
            .then(house => res.sendStatus(200))
            .catch(error => res.status(500).send(console.log('O snap something went wrong in the addHouse controller')))
    },
    deleteHouse: (req, res, next) => {
        const { id } = req.params
        req.app.get('db').delete_house(id)
            .then(house => res.sendStatus(200))
            .catch(error => res.status(500).send(console.log('O snap something went wrong in the deleteHouse controller')))
    }
}