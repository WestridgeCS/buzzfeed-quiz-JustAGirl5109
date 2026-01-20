import { Router } from 'express';

export const router = Router();

router.get('/', (req, res) => {
  res.render('quiz', {
    title: 'Buzzfeed Quiz',
    step: 1,
    state: {},
    outcome: null
  });
});

// One route handles all choices
router.post('/quiz', (req, res) => {
  const ans = req.body.q1;
  res.render('quiz', {
    answer1: `You selected: ${ans}`,
    title: 'Quiz Question',
    step: 2,
    state: {answer1: ans},
    outcome: null

  });
  console.log(res.render);
});


