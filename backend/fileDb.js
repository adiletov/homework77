const fs = require('fs');
const nanoid = require('nanoid');



const readFile = filename => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const writeFile = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, err => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
};

const filename = './publications.json';
let data = [];

module.exports = {
   async init(){
        try{
            const filePublications = await readFile(filename);
            data =  JSON.parse(filePublications.toString());
        }catch (e) {
           console.log('Could not read file ');
            data = [];
        }

    },

   async getDateBase(){
       return data;
    },

   async addFileDateBase(publication){
       const date = new Date();
       publication.id = nanoid();
       publication.date = date;
       data.unshift(publication);
       await this.save()
    },
   async save(){
        const filePublication = JSON.stringify(data, null , 2);
        await writeFile(filename, filePublication);
    }
};

