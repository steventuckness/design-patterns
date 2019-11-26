import { Liquor } from './Liquor';
import { Tobacco } from './Tobacco';
import { Necessity } from './Necessity';

export class TaxVisitor implements Visitor {

    public VisitLiquor(liquorItem: Liquor): number {
        console.log('Liquor Item: Price with Tax');
        return +(liquorItem.getPrice() * 1.18).toFixed(2);
    }

    public VisitTabacco(tobaccoItem: Tobacco): number {
        console.log('Tabacco Item: Price with Tax');
        return +(tobaccoItem.getPrice() * 1.32).toFixed(2);
    }

    public VisitNecessity(necessityItem: Necessity): number {
        console.log('Necessity Item: Price with Tax');
        return +(necessityItem.getPrice()).toFixed(2);
    }
}