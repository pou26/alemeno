const productModel = require("../models/courseModel")
const aws = require("../AWS/aws")
const valid = require("../Validator/validator")
const courseModel = require("../models/courseModel")

const createCourse = async function (req, res) {
    try {
        let data = req.body
        let file = req.files
        

        
        let { courseName,description,currencyFormat,price,duration,enrollmentStatus,schedule,location,syllabusTitle,syllabusdesc,instructor,courseImage} = data

        if (file && file.length > 0) {
            let validImage=file[0].mimetype.split('/')
            if(validImage[0]!="image"){
           return res.status(400).send({ status: false, message: "Please Provide Valid Image.." })}
            let image = await aws.uploadFile(file[0])
            data.courseImage = image
        } 
        // else {
        //     return res.status(400).send({ status: false, message: "please provide the courseImage" })
        // }

        if (!courseName)
            return res.status(400).send({ status: false, message: "courseName is mandatory" });
        if (!valid.isValidT(courseName)) {
            return res.status(400).send({ status: false, message: "courseName not in valid format." })
        }

        let duplicatecourseName = await courseModel.findOne({ courseName: courseName })
        if (duplicatecourseName) {
            return res.status(400).send({ status: false, message: "course name already exist" })
        }
        if (!description)
            return res.status(400).send({ status: false, message: "description is mandatory" });

        if (!price)
            return res.status(400).send({ status: false, message: "price is mandatory." });
        if (price) {
            if (!(valid.isValidPrice(price))) {
                return res.status(400).send({ status: false, message: "Invalid price" })
            }
        }
        if (!duration)
        return res.status(400).send({ status: false, message: "duration is mandatory." });

        // if (!enrollmentStatus)
        //     return res.status(400).send({ status: false, message: "enrollmentStatus is mandatory." });
        // let status1 = ["Open","Closed","In Progress"];
        // let status2 = enrollmentStatus
        //     .toUpperCase()
        //     .split(",")
        //     .map((x) => x.trim());
        // for (let i = 0; i < status2.length; i++) {
        //     if (!status1.includes(status2[i])) {
        //         return res.status(400).send({ status: false, message: "Status should one of these - 'Open','Closed','In Progress'", });
        //     }
        // } data.enrollmentStatus = status2

        //currency format

    if(currencyFormat){  
        if (currencyFormat != "₹") {
            return res.status(400).send({ status: false, message: "only indian currency ₹ accepted " })
        }}
        //currency id

        
        data.currenyFormat = "₹"
        if (!schedule)
        return res.status(400).send({ status: false, message: "schedule is mandatory." });
        if (!location)
        return res.status(400).send({ status: false, message: "location is mandatory." });
        if (!syllabusTitle)
        return res.status(400).send({ status: false, message: "syllabus Title is mandatory." });
        if (!syllabusdesc)
        return res.status(400).send({ status: false, message: "syllabus description is mandatory." });
        if (!instructor)
        return res.status(400).send({ status: false, message: "instructor name is mandatory." });

        //creation

        const created = await courseModel.create(data)
        return res.status(201).send({ status: true, message: "Success", data: created })

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

}
//================================ getProductsByQuery ==============================================//
// const getProductsByQuery = async function (req, res) {
//     try {
//         const queryParams = req.query
//         //Extract params
//         let { size, name, priceGreaterThan, priceLessThan, priceSort } = queryParams

//         const filterQuery = { isDeleted: false }
//         // validation start
//         if (size) {
//             size = size.toUpperCase().split(",")
//             if (!size) return res.status(400).send({ status: false, msg: "provide size" })
//             for (let i = 0; i < size.length; i++) {

//                 if (!valid.isValidAvailableSizes(size[i])) {
//                     return res.status(400).send({ status: false, msg: `Size should be among ${["S", "XS", "M", "X", "L", "XXL", "XL"]}` })
//                 }
//             }
//             filterQuery['availableSizes'] = { $in: size }
//         };

//         if (priceGreaterThan) {
//             if (!valid.isValidPrice(priceGreaterThan))
//                 return res.status(400).send({ status: false, msg: "provide priceGreaterThan in numeric" })
//             filterQuery['price'] = { $gt: priceGreaterThan }
//         };

//         if (priceLessThan) {
//             if (!valid.isValidPrice(priceLessThan))
//                 return res.status(400).send({ status: false, msg: "provide priceLessThan in numeric" })
//             filterQuery['price'] = { $lt: priceLessThan }
//         };
//         if(name){
//         if (valid.isValid(name)) {
//             filterQuery['title'] = { $regex: name, $options: "i" }
//         }};

//         // validation of priceSort
//         if (priceSort) {
//             if (!((priceSort == 1) || (priceSort == -1))) {
//                 return res.status(400).send({ status: false, message: "Price sort only takes 1 or -1 as a value" })
//             }

//             let filterProduct = await productModel.find(filterQuery).sort({ price: priceSort })
//             if (Object.keys(filterProduct).length == 0) { return res.status(400).send({ status: false, message: "No products found with this query" }) }
//             return res.status(200).send({ status: true, message: 'Success', data: filterProduct })
//         }
//         // validation end

//         const products = await productModel.find(filterQuery).sort({ price: 1 })

//         if (Object.keys(products).length == 0) { return res.status(400).send({ status: false, message: "Product not found" }) }
//         return res.status(200).send({ status: true, message: "Success", data: products })

//     } catch (err) {
//         return res.status(500).send({ status: false, message: err.message });
//     }
// };



    const getCourse = async function (req, res) {
        try {
     const Course = await courseModel.find()
     return res.status(200).send({ Data: Course });
   } catch (error) {
     console.log(error)
     return res.status(500).send({ message: error.message })
   }
 }




module.exports = { createCourse,getCourse}



