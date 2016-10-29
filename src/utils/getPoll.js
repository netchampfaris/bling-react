import db from './fb';

export default (key) => {
    return new Promise((resolve, reject) => {
        const loc = 'poll/' + key;
        db.ref(loc).once('value', (snap) => {
            console.log(snap);
            const {title, options} = snap.val();
            resolve({title, options});
        });
    })
}