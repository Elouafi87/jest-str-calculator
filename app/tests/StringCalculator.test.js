import  {StringCalculator} from '../js/StringCalculator'

    test('retourne 1 pour number= 1', () => {
      var x = new StringCalculator;
            expect(x.add("1","2")).toBe(3);
          });