class Apifeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;
    }
    search(){
        const keyword = this.queryStr.keyword?{
            name:{
                $regex:this.queryStr.keyword,
                $options:'i',
            }
        }:{};
        this.query=this.query.find({...keyword})
        return this;
    }
    //Filtering other keyword
    filter(){
        const queryCopy = {...this.queryStr}
        //Removing some fields for catagory
        const removeFields = ["page","keyword","limit"];
        removeFields.forEach(key=>delete queryCopy[key]);
        

//Filter for Price and Rating

        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|lt|gte|lte)\b/g,(key)=>`$${key}`);
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

//For Pagination

    pagination(){
        const page = parseInt(this.queryStr.page) || 1;
        const limit = parseInt(this.queryStr.limit) || 5;
        this.query = this.query.skip((page-1)*limit).limit(limit);
        /* console.log(limit) */
        return this;

}
}
module.exports = Apifeatures;