import db from './fb';

export default function () {
    let polls = [];
    db.ref('poll').once('value', function (snap) {
        for (let key in snap.val()) {
            if (snap.val().hasOwnProperty(key)) {
                let poll = snap.val()[key];
                poll.key = key;
                polls.push(poll);
            }
        }
        return polls;
    });
}