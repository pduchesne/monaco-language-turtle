// Generated from ./turtle.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { TurtleDocContext } from "./turtleParser";
import { StatementContext } from "./turtleParser";
import { DirectiveContext } from "./turtleParser";
import { PrefixIDContext } from "./turtleParser";
import { BaseContext } from "./turtleParser";
import { SparqlBaseContext } from "./turtleParser";
import { SparqlPrefixContext } from "./turtleParser";
import { TriplesContext } from "./turtleParser";
import { PredicateObjectListContext } from "./turtleParser";
import { ObjectListContext } from "./turtleParser";
import { VerbContext } from "./turtleParser";
import { SubjectContext } from "./turtleParser";
import { PredicateContext } from "./turtleParser";
import { Object_Context } from "./turtleParser";
import { LiteralContext } from "./turtleParser";
import { BlankNodePropertyListContext } from "./turtleParser";
import { CollectionContext } from "./turtleParser";
import { RdfLiteralContext } from "./turtleParser";
import { IriContext } from "./turtleParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `turtleParser`.
 */
export interface turtleListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `turtleParser.turtleDoc`.
	 * @param ctx the parse tree
	 */
	enterTurtleDoc?: (ctx: TurtleDocContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.turtleDoc`.
	 * @param ctx the parse tree
	 */
	exitTurtleDoc?: (ctx: TurtleDocContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.prefixID`.
	 * @param ctx the parse tree
	 */
	enterPrefixID?: (ctx: PrefixIDContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.prefixID`.
	 * @param ctx the parse tree
	 */
	exitPrefixID?: (ctx: PrefixIDContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.base`.
	 * @param ctx the parse tree
	 */
	enterBase?: (ctx: BaseContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.base`.
	 * @param ctx the parse tree
	 */
	exitBase?: (ctx: BaseContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.sparqlBase`.
	 * @param ctx the parse tree
	 */
	enterSparqlBase?: (ctx: SparqlBaseContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.sparqlBase`.
	 * @param ctx the parse tree
	 */
	exitSparqlBase?: (ctx: SparqlBaseContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.sparqlPrefix`.
	 * @param ctx the parse tree
	 */
	enterSparqlPrefix?: (ctx: SparqlPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.sparqlPrefix`.
	 * @param ctx the parse tree
	 */
	exitSparqlPrefix?: (ctx: SparqlPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.triples`.
	 * @param ctx the parse tree
	 */
	enterTriples?: (ctx: TriplesContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.triples`.
	 * @param ctx the parse tree
	 */
	exitTriples?: (ctx: TriplesContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.predicateObjectList`.
	 * @param ctx the parse tree
	 */
	enterPredicateObjectList?: (ctx: PredicateObjectListContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.predicateObjectList`.
	 * @param ctx the parse tree
	 */
	exitPredicateObjectList?: (ctx: PredicateObjectListContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.objectList`.
	 * @param ctx the parse tree
	 */
	enterObjectList?: (ctx: ObjectListContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.objectList`.
	 * @param ctx the parse tree
	 */
	exitObjectList?: (ctx: ObjectListContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.verb`.
	 * @param ctx the parse tree
	 */
	enterVerb?: (ctx: VerbContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.verb`.
	 * @param ctx the parse tree
	 */
	exitVerb?: (ctx: VerbContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.subject`.
	 * @param ctx the parse tree
	 */
	enterSubject?: (ctx: SubjectContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.subject`.
	 * @param ctx the parse tree
	 */
	exitSubject?: (ctx: SubjectContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.object_`.
	 * @param ctx the parse tree
	 */
	enterObject_?: (ctx: Object_Context) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.object_`.
	 * @param ctx the parse tree
	 */
	exitObject_?: (ctx: Object_Context) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.blankNodePropertyList`.
	 * @param ctx the parse tree
	 */
	enterBlankNodePropertyList?: (ctx: BlankNodePropertyListContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.blankNodePropertyList`.
	 * @param ctx the parse tree
	 */
	exitBlankNodePropertyList?: (ctx: BlankNodePropertyListContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.collection`.
	 * @param ctx the parse tree
	 */
	enterCollection?: (ctx: CollectionContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.collection`.
	 * @param ctx the parse tree
	 */
	exitCollection?: (ctx: CollectionContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.rdfLiteral`.
	 * @param ctx the parse tree
	 */
	enterRdfLiteral?: (ctx: RdfLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.rdfLiteral`.
	 * @param ctx the parse tree
	 */
	exitRdfLiteral?: (ctx: RdfLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `turtleParser.iri`.
	 * @param ctx the parse tree
	 */
	enterIri?: (ctx: IriContext) => void;
	/**
	 * Exit a parse tree produced by `turtleParser.iri`.
	 * @param ctx the parse tree
	 */
	exitIri?: (ctx: IriContext) => void;
}

