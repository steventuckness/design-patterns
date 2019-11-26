export class Necessity {
    private price: number;

    constructor(item: number) {
        this.price = item;
    }

    public Accept(visitor: Visitor) {
        return visitor.VisitNecessity(this);
    }

    public getPrice(): number {
        return this.price;
    }
}