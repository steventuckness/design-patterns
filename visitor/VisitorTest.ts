import { TaxVisitor } from './TaxVisitor';
import { Liquor } from './Liquor';
import { Tobacco } from './Tobacco';
import { Necessity } from './Necessity';
import { TaxHolidayVisitor } from './TaxHolidayVisitor';

export class VisitorTest {
    
    public constructor() {
        let taxCalc: TaxVisitor = new TaxVisitor();
        let taxHolidayVisitorCalc: TaxHolidayVisitor = new TaxHolidayVisitor();

        let milk: Necessity = new Necessity(3.47);
        let vodka: Liquor = new Liquor(11.99);
        let cigars: Tobacco = new Tobacco(19.99);

        console.log(milk.Accept(taxCalc) + '\n');
        console.log(vodka.Accept(taxCalc) + '\n');
        console.log(cigars.Accept(taxCalc) + '\n');

        console.log('TAX HOLIDAY PRICES\n');
        
        console.log(milk.Accept(taxHolidayVisitorCalc) + '\n');
        console.log(vodka.Accept(taxHolidayVisitorCalc) + '\n');
        console.log(cigars.Accept(taxHolidayVisitorCalc) + '\n');
    }
}

let visitorTest: VisitorTest = new VisitorTest();