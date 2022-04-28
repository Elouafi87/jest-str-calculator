import  {StringCalculator} from '../js/StringCalculator'

describe( 'StringCalculator TESTS', () => {
    test('return 0 for  add("") ', () => {
      var x = new StringCalculator;
            expect(x.add("0")).toBe(0);
          });
    test('return 5 for  add("5")', () => {
            var x = new StringCalculator;
                  expect(x.add("5")).toBe(5);
                });
    test('return 10 for add("9,1,5,4")', () => {
      var x = new StringCalculator;
            expect(x.add("9,1,5,4")).toBe(19);
          });
    test('return 15 for add("9\n1,5/2")', () => {
      var x = new StringCalculator;
            expect(x.add("9\n1;5/2")).toBe(17);
          });

    test('negatif not allowed ")', () => {
      var x = new StringCalculator;
            expect(x.add("-1")).toBe(-1);
          });

    });