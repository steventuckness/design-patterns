export class Liquor implements Visitable {
    private price: number;

    public constructor (item: number) {
        this.price = item;
    }

    public Accept(visitor: Visitor): number {
        return visitor.VisitLiquor(this);
    }

    public getPrice(): number {
        return this.price;
    }

}