import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'kei9nwpb',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:'sklslyzA1Nzm21IXkhqvmfaPfVbyjbpQ415rX195guxIQCwSHyPgmVMVpezw5H56mzA9zCABKgq3wqOhn6vzJOwRIbpmgeVaJxWMDBFhDZTGAW3MAhCtNa0lp2CIqNeYfG5lqurLPWOuraMA0t656uFNz4d5kLdzBSYIWuLZrxy54wijx1g6'
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) =>builder.image(source);