interface Visitor {
    VisitLiquor(Liquor): number;
    VisitTabacco(Tabacco): number;
    VisitNecessity(Neccessity): number;
}