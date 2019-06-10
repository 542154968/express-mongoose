module.exports = {
    /**
     * 通用save方法
     */
    save: (model, next) => {
        return new Promise((resolve, reject) => {
            model.save(function(error) {
                error = model.validateSync()
                if (error) {
                    reject(error)
                    return next(error.errors || error)
                } else {
                    resolve()
                }
            })
        })
    }
}
