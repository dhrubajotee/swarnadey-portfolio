// PHOTOS: add 1-8 image paths per list (put files in /public/photos). Empty = placeholder box.
export const photos = {
  cafe: ['/photos/bengali.jpg'], art: ['/photos/artcover.jpg'], blog: ['/photos/blog.jpg'], visual: ['/photos/insta.jpg'],
  earlier: { dumuna: ['/photos/dumuna.jpg'], trees: ['/photos/forest.JPG'], school: ['/photos/child.png'] },
  volunteering: { facilitator: 
    [
      '/photos/cf1.png',
      '/photos/cf2.jpg',
      '/photos/cf3.png'
    ], 
    forum: [
      '/photos/adv1.jpg',
      '/photos/adv2.jpg'
    ], cultural: [
      '/photos/vc1.jpg',
      '/photos/vc2.jpg'
    ], service: [
      '/photos/cs1.jpg',
      '/photos/cs2.jpg',
    ], civic: [
      '/photos/co2.jpg',
      '/photos/co3.jpg'
    ], museum: [
      '/photos/tm1.jpg',
      '/photos/tm2.jpg',
      '/photos/tm3.jpg',
    ] },
  contact: ['/photos/contact.JPG'],
  hero: ['/photos/hero.jpg'], heroBg: []
};
// DETAIL PAGES: gallery items {src, caption}; videos/blogs items {title, url}
export const detail = {
  // Video thumbnails: save an image in /public/photos and set thumb:'/photos/name.jpg'
  cafe: { gallery: [
    {src:'/photos/bengalicafe/cf1.JPG', caption:'Family Cafe'},
    {src:'/photos/bengalicafe/cf2.JPG'},
    {src:'/photos/bengalicafe/cf3.JPG'},
    {src:'/photos/bengalicafe/cf4.JPG'},
    {src:'/photos/bengalicafe/cf5.JPG'},
    {src:'/photos/bengalicafe/cf6.JPG'},
    {src:'/photos/bengalicafe/cf7.JPG'},
    {src:'/photos/bengalicafe/cf8.JPG'},
  ],
    videos: [{url:'https://www.instagram.com/priyodorshini.d_/reel/Db5mMHTtauD/',title:'Bengali Family Café day 1',thumb:''},
    {url:'https://www.instagram.com/priyodorshini.d_/reel/DdibZfLtG1F/',title:'Bengali Family Café day 2',thumb:''}],
    blogs: [{url:'https://finding-sisu.vercel.app/blog/bengali-family-cafe-jyvaskyla'}] },
  art:  { gallery: [
    {src:'/photos/art/art1.JPG', caption:'Family Cafe'},
    {src:'/photos/art/art2.JPG'},
    {src:'/photos/art/art3.JPG'},
    {src:'/photos/art/art4.JPG'},
    {src:'/photos/art/art5.JPG'},
    {src:'/photos/art/art6.JPG'},
    {src:'/photos/art/art7.JPG'},
    {src:'/photos/art/art8.JPG'},
    {src:'/photos/art/art9.JPG'},
  ],
    videos: [{url:'https://www.instagram.com/priyodorshini.d_/reel/DdRK_N7Ns0A/',title:'Our biggest art workshop with 60+ people!!',thumb:''},
    {url:'https://www.instagram.com/priyodorshini.d_/reel/DU8Ry2ZDOKe/',title:'Watercolor day!!',thumb:''},
    {url:'https://www.instagram.com/priyodorshini.d_/reel/DUN8Rchjevv/',title:'Starting art club season 2!!',thumb:''},
    {url:'https://www.instagram.com/priyodorshini.d_/reel/DQ6Y9y3Dd1k/',title:'A day in our art club',thumb:''},
    {url:'https://www.instagram.com/priyodorshini.d_/reel/DP1QKQgDOJg/',title:'Get ready for our club!',thumb:''}],
    blogs: [{url:'https://finding-sisu.vercel.app/blog/art-club'}] }
};
// TESTIMONIALS: {quote, name, role, quoteFi, roleFi}
export const testimonials = [
  {quote:'Swarna is a cheerful, creative, and courageous individual who learns quickly and participates enthusiastically. As a co-facilitator of our Art Club, she demonstrated positive leadership by guiding participants in both Finnish and English. Her creativity, empathy, and ability to encourage others make her a valued member of our community.',name:'Sanna Rasinkangas',role:'Supervisor, Aseman Pysäkki',quoteFi:'Swarna on iloinen, luova ja rohkea ihminen, joka oppii nopeasti ja osallistuu innokkaasti. Taidekerhomme yhtenä ohjaajana hän osoitti myönteistä johtajuutta ohjaamalla osallistujia sekä suomeksi että englanniksi. Hänen luovuutensa, empatiakykynsä ja kykynsä kannustaa muita tekevät hänestä arvostetun yhteisömme jäsenen.',roleFi:'Esihenkilö, Aseman Pysäkki'},
  {quote:'Swarna is a helpful, flexible, and positive team member with strong customer service and teamwork skills. She treats others with empathy and respect, is reliable, and applies her skills effectively in her work.',name:'Anne-Marie Lehto',role:'Supervisor, Aseman Pysäkki',quoteFi:'Swarna on avulias, joustava ja positiivinen tiimin jäsen, jolla on vahvat asiakaspalvelu- ja yhteistyötaidot. Hän kohtelee muita empaattisesti ja kunnioittavasti, on luotettava ja hyödyntää taitojaan tehokkaasti työssään.',roleFi:'Esihenkilö, Aseman Pysäkki'}
];
