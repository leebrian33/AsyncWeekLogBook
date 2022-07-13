const { green, red } = require("chalk");
const { db } = require("./server/db");
const Campus = require('./server/db/campus')
const Student = require('./server/db/student')


const seed = async () => {
  try {
    // seed your database here!
    await db.sync({ force: true });


    const campus1 = await Campus.create({
      name: 'Rochester Institute of Technology',
      imageUrl: 'https://smta.org/resource/resmgr/syp/student_chapter_logos/rit.png',
      address: '1 Lomb Memorial Dr, Rochester, NY 14623',
      description: 'Rochester Institute of Technology is a private research university in the town of Henrietta in the Rochester, New York, metropolitan area. The university offers undergraduate and graduate degrees, including doctoral and professional degrees and online masters as well.'
    })
  
    const campus2 = await Campus.create({
      name: 'Syracuse University',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Syracuse_University_seal.svg/1200px-Syracuse_University_seal.svg.png',
      address: '900 South Crouse Ave Syracuse, NY 13244',
      description: 'Syracuse University is a private research university in Syracuse, New York. Established in 1870 with roots in the Methodist Episcopal Church, the university has been nonsectarian since 1920. '
    })
  
    const campus3 = await Campus.create({
      name: 'University of Rochester',
      imageUrl: 'https://www.rochester.edu/assets/images/2007-10-31_Rush_Rhees_Library_10152.jpg',
      address: '500 Joseph C. Wilson Blvd. Rochester, NY 14627',
      description: 'The University of Rochester is a private research university in Rochester, New York. The university grants undergraduate and graduate degrees, including doctoral and professional degrees. The University of Rochester enrolls approximately 6,800 undergraduates and 5,000 graduate students.'
    })

    const brian = await Student.create({
      
      firstName: 'Brian',
      lastName: 'Lee',
      email: 'brianlee@email.com', 
      imageUrl: 'https://i.kym-cdn.com/entries/icons/mobile/000/006/026/NOTSUREIF.jpg',
      gpa: 3.5,
      campusId: 1
    })
    const michael = await Student.create({
      campusId: 2,
      firstName: 'Micahel',
      lastName: 'Lawrie',
      email: 'michaellawrie@email.com', 
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/HOWiq29vUhGGTVTcjNqMA7refT4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23249598/mgid_arc_imageassetref_comedycentral.jpeg',
      gpa: 3.6
    })
    const sam = await Student.create({
      campusId: 2,
      firstName: 'Sam',
      lastName: 'Pomerantz',
      email: 'Sampomerantz@email.com', 
      imageUrl: 'https://i.pinimg.com/564x/bb/d8/80/bbd880b7b9d475469df1ae9b693a41c0.jpg',
      gpa: 3.7
    })

    const kathryn = await Student.create({
      firstName: 'Kathryn',
      lastName: 'LaBine',
      email: 'kathrynlabine@email.com', 
      imageUrl: 'https://i.ebayimg.com/images/g/JO0AAOSw2RdeKCea/s-l500.png',
      gpa: 3.8
    })

    
    
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
