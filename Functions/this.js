// this refers to the object, function or global scope depends upon the location


const video = {
    title : "The Movie",
    tags : ['a','b','c'],
    showTags() {
        this.tags.forEach((tag) => {
            console.log(this.title,tag);
        }, this) // passing as an argument to forEach() to reference object
    } 

};

video.showTags();