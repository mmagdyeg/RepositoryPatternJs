// Constructor function for ItemsRepoObject
function ItemsRepoObject() {
    this.items = [];
    this.isItemExist = function (id) {
        var exist = false;
        for (var i in this.items)
            if (this.items[i].id == id)
                exist = true;

        return exist;
    };
    this.createItem = function (id, title, brief, url) {
        var item = {
            "id": id,
            "title": title,
            "brief": brief,
            "url": url,
        }
        return item;
    };
    this.addItem = function (item) {
        this.items.push(item);
    };
    this.removeItem = function (id) {
        var index = this.items.map(item => item.id).indexOf(id);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    this.getItem = function (id) {
        for (var i in this.items)
            if (this.items[i].id == id) {            
                return this.items[i];
            }

    };
    this.updateItem = function (item) {
        for (var i in this.items)
            if (this.items[i].id == item.id) {               
                    this.items[i] = item;
            }
    };
    this.sort = function (ids) {
        order = {};
        ids.forEach(function (a, i) { order[a] = i; });
        this.items.sort(function (a, b) {
            return order[a.id] - order[b.id];
        });
    }
}


//var firstItems = new ItemsRepoObject();
//var secondItems = new ItemsRepoObject();