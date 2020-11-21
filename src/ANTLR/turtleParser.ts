// Generated from ./turtle.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { RecognitionException } from "antlr4ts/RecognitionException";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { turtleListener } from "./turtleListener";

export class turtleParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly NumericLiteral = 14;
	public static readonly BooleanLiteral = 15;
	public static readonly String = 16;
	public static readonly BlankNode = 17;
	public static readonly WS = 18;
	public static readonly PN_PREFIX = 19;
	public static readonly IRIREF = 20;
	public static readonly PNAME_NS = 21;
	public static readonly PrefixedName = 22;
	public static readonly PNAME_LN = 23;
	public static readonly BLANK_NODE_LABEL = 24;
	public static readonly LANGTAG = 25;
	public static readonly INTEGER = 26;
	public static readonly DECIMAL = 27;
	public static readonly DOUBLE = 28;
	public static readonly EXPONENT = 29;
	public static readonly STRING_LITERAL_LONG_SINGLE_QUOTE = 30;
	public static readonly STRING_LITERAL_LONG_QUOTE = 31;
	public static readonly STRING_LITERAL_QUOTE = 32;
	public static readonly STRING_LITERAL_SINGLE_QUOTE = 33;
	public static readonly UCHAR = 34;
	public static readonly ECHAR = 35;
	public static readonly ANON_WS = 36;
	public static readonly ANON = 37;
	public static readonly PN_CHARS_BASE = 38;
	public static readonly PN_CHARS_U = 39;
	public static readonly PN_CHARS = 40;
	public static readonly PN_LOCAL = 41;
	public static readonly PLX = 42;
	public static readonly PERCENT = 43;
	public static readonly HEX = 44;
	public static readonly PN_LOCAL_ESC = 45;
	public static readonly RULE_turtleDoc = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_directive = 2;
	public static readonly RULE_prefixID = 3;
	public static readonly RULE_base = 4;
	public static readonly RULE_sparqlBase = 5;
	public static readonly RULE_sparqlPrefix = 6;
	public static readonly RULE_triples = 7;
	public static readonly RULE_predicateObjectList = 8;
	public static readonly RULE_objectList = 9;
	public static readonly RULE_verb = 10;
	public static readonly RULE_subject = 11;
	public static readonly RULE_predicate = 12;
	public static readonly RULE_object_ = 13;
	public static readonly RULE_literal = 14;
	public static readonly RULE_blankNodePropertyList = 15;
	public static readonly RULE_collection = 16;
	public static readonly RULE_rdfLiteral = 17;
	public static readonly RULE_iri = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"turtleDoc", "statement", "directive", "prefixID", "base", "sparqlBase", 
		"sparqlPrefix", "triples", "predicateObjectList", "objectList", "verb", 
		"subject", "predicate", "object_", "literal", "blankNodePropertyList", 
		"collection", "rdfLiteral", "iri",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'@prefix'", "'@base'", "'BASE'", "'PREFIX'", "';'", 
		"','", "'a'", "'['", "']'", "'('", "')'", "'^^'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"NumericLiteral", "BooleanLiteral", "String", "BlankNode", "WS", "PN_PREFIX", 
		"IRIREF", "PNAME_NS", "PrefixedName", "PNAME_LN", "BLANK_NODE_LABEL", 
		"LANGTAG", "INTEGER", "DECIMAL", "DOUBLE", "EXPONENT", "STRING_LITERAL_LONG_SINGLE_QUOTE", 
		"STRING_LITERAL_LONG_QUOTE", "STRING_LITERAL_QUOTE", "STRING_LITERAL_SINGLE_QUOTE", 
		"UCHAR", "ECHAR", "ANON_WS", "ANON", "PN_CHARS_BASE", "PN_CHARS_U", "PN_CHARS", 
		"PN_LOCAL", "PLX", "PERCENT", "HEX", "PN_LOCAL_ESC",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(turtleParser._LITERAL_NAMES, turtleParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return turtleParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "turtle.g4"; }

	// @Override
	public get ruleNames(): string[] { return turtleParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return turtleParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(turtleParser._ATN, this);
	}
	// @RuleVersion(0)
	public turtleDoc(): TurtleDocContext {
		let _localctx: TurtleDocContext = new TurtleDocContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, turtleParser.RULE_turtleDoc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.T__1) | (1 << turtleParser.T__2) | (1 << turtleParser.T__3) | (1 << turtleParser.T__4) | (1 << turtleParser.T__8) | (1 << turtleParser.T__10) | (1 << turtleParser.BlankNode) | (1 << turtleParser.IRIREF) | (1 << turtleParser.PrefixedName))) !== 0)) {
				{
				{
				this.state = 38;
				this.statement();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, turtleParser.RULE_statement);
		try {
			this.state = 48;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.T__1:
			case turtleParser.T__2:
			case turtleParser.T__3:
			case turtleParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				this.directive();
				}
				break;
			case turtleParser.T__8:
			case turtleParser.T__10:
			case turtleParser.BlankNode:
			case turtleParser.IRIREF:
			case turtleParser.PrefixedName:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 45;
				this.triples();
				this.state = 46;
				this.match(turtleParser.T__0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directive(): DirectiveContext {
		let _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, turtleParser.RULE_directive);
		try {
			this.state = 54;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 50;
				this.prefixID();
				}
				break;
			case turtleParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 51;
				this.base();
				}
				break;
			case turtleParser.T__4:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 52;
				this.sparqlPrefix();
				}
				break;
			case turtleParser.T__3:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 53;
				this.sparqlBase();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prefixID(): PrefixIDContext {
		let _localctx: PrefixIDContext = new PrefixIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, turtleParser.RULE_prefixID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(turtleParser.T__1);
			this.state = 57;
			this.match(turtleParser.PNAME_NS);
			this.state = 58;
			this.match(turtleParser.IRIREF);
			this.state = 59;
			this.match(turtleParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public base(): BaseContext {
		let _localctx: BaseContext = new BaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, turtleParser.RULE_base);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this.match(turtleParser.T__2);
			this.state = 62;
			this.match(turtleParser.IRIREF);
			this.state = 63;
			this.match(turtleParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sparqlBase(): SparqlBaseContext {
		let _localctx: SparqlBaseContext = new SparqlBaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, turtleParser.RULE_sparqlBase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(turtleParser.T__3);
			this.state = 66;
			this.match(turtleParser.IRIREF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sparqlPrefix(): SparqlPrefixContext {
		let _localctx: SparqlPrefixContext = new SparqlPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, turtleParser.RULE_sparqlPrefix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(turtleParser.T__4);
			this.state = 69;
			this.match(turtleParser.PNAME_NS);
			this.state = 70;
			this.match(turtleParser.IRIREF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public triples(): TriplesContext {
		let _localctx: TriplesContext = new TriplesContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, turtleParser.RULE_triples);
		let _la: number;
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.T__10:
			case turtleParser.BlankNode:
			case turtleParser.IRIREF:
			case turtleParser.PrefixedName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 72;
				this.subject();
				this.state = 73;
				this.predicateObjectList();
				}
				break;
			case turtleParser.T__8:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 75;
				this.blankNodePropertyList();
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.T__7) | (1 << turtleParser.IRIREF) | (1 << turtleParser.PrefixedName))) !== 0)) {
					{
					this.state = 76;
					this.predicateObjectList();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicateObjectList(): PredicateObjectListContext {
		let _localctx: PredicateObjectListContext = new PredicateObjectListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, turtleParser.RULE_predicateObjectList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.verb();
			this.state = 82;
			this.objectList();
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === turtleParser.T__5) {
				{
				{
				this.state = 83;
				this.match(turtleParser.T__5);
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.T__7) | (1 << turtleParser.IRIREF) | (1 << turtleParser.PrefixedName))) !== 0)) {
					{
					this.state = 84;
					this.verb();
					this.state = 85;
					this.objectList();
					}
				}

				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectList(): ObjectListContext {
		let _localctx: ObjectListContext = new ObjectListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, turtleParser.RULE_objectList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.object_();
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === turtleParser.T__6) {
				{
				{
				this.state = 95;
				this.match(turtleParser.T__6);
				this.state = 96;
				this.object_();
				}
				}
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public verb(): VerbContext {
		let _localctx: VerbContext = new VerbContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, turtleParser.RULE_verb);
		try {
			this.state = 104;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.IRIREF:
			case turtleParser.PrefixedName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 102;
				this.predicate();
				}
				break;
			case turtleParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 103;
				this.match(turtleParser.T__7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subject(): SubjectContext {
		let _localctx: SubjectContext = new SubjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, turtleParser.RULE_subject);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.IRIREF:
			case turtleParser.PrefixedName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				this.iri();
				}
				break;
			case turtleParser.BlankNode:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				this.match(turtleParser.BlankNode);
				}
				break;
			case turtleParser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 108;
				this.collection();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicate(): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, turtleParser.RULE_predicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.iri();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public object_(): Object_Context {
		let _localctx: Object_Context = new Object_Context(this._ctx, this.state);
		this.enterRule(_localctx, 26, turtleParser.RULE_object_);
		try {
			this.state = 118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.IRIREF:
			case turtleParser.PrefixedName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 113;
				this.iri();
				}
				break;
			case turtleParser.BlankNode:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 114;
				this.match(turtleParser.BlankNode);
				}
				break;
			case turtleParser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 115;
				this.collection();
				}
				break;
			case turtleParser.T__8:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 116;
				this.blankNodePropertyList();
				}
				break;
			case turtleParser.NumericLiteral:
			case turtleParser.BooleanLiteral:
			case turtleParser.String:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 117;
				this.literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, turtleParser.RULE_literal);
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.String:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 120;
				this.rdfLiteral();
				}
				break;
			case turtleParser.NumericLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 121;
				this.match(turtleParser.NumericLiteral);
				}
				break;
			case turtleParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 122;
				this.match(turtleParser.BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blankNodePropertyList(): BlankNodePropertyListContext {
		let _localctx: BlankNodePropertyListContext = new BlankNodePropertyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, turtleParser.RULE_blankNodePropertyList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(turtleParser.T__8);
			this.state = 126;
			this.predicateObjectList();
			this.state = 127;
			this.match(turtleParser.T__9);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public collection(): CollectionContext {
		let _localctx: CollectionContext = new CollectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, turtleParser.RULE_collection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(turtleParser.T__10);
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.T__8) | (1 << turtleParser.T__10) | (1 << turtleParser.NumericLiteral) | (1 << turtleParser.BooleanLiteral) | (1 << turtleParser.String) | (1 << turtleParser.BlankNode) | (1 << turtleParser.IRIREF) | (1 << turtleParser.PrefixedName))) !== 0)) {
				{
				{
				this.state = 130;
				this.object_();
				}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 136;
			this.match(turtleParser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rdfLiteral(): RdfLiteralContext {
		let _localctx: RdfLiteralContext = new RdfLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, turtleParser.RULE_rdfLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(turtleParser.String);
			this.state = 142;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.LANGTAG:
				{
				this.state = 139;
				this.match(turtleParser.LANGTAG);
				}
				break;
			case turtleParser.T__12:
				{
				this.state = 140;
				this.match(turtleParser.T__12);
				this.state = 141;
				this.iri();
				}
				break;
			case turtleParser.T__0:
			case turtleParser.T__5:
			case turtleParser.T__6:
			case turtleParser.T__8:
			case turtleParser.T__9:
			case turtleParser.T__10:
			case turtleParser.T__11:
			case turtleParser.NumericLiteral:
			case turtleParser.BooleanLiteral:
			case turtleParser.String:
			case turtleParser.BlankNode:
			case turtleParser.IRIREF:
			case turtleParser.PrefixedName:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iri(): IriContext {
		let _localctx: IriContext = new IriContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, turtleParser.RULE_iri);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			_la = this._input.LA(1);
			if (!(_la === turtleParser.IRIREF || _la === turtleParser.PrefixedName)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\x95\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x07\x02*\n\x02\f\x02\x0E\x02-\v\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x033\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x049\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\tP\n\t\x05\tR\n\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\nZ\n\n\x07\n\\\n\n\f\n\x0E\n_\v\n\x03\v\x03\v\x03\v" +
		"\x07\vd\n\v\f\v\x0E\vg\v\v\x03\f\x03\f\x05\fk\n\f\x03\r\x03\r\x03\r\x05" +
		"\rp\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"y\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10~\n\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x07\x12\x86\n\x12\f\x12\x0E\x12\x89\v\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\x91\n\x13\x03\x14" +
		"\x03\x14\x03\x14\x02\x02\x02\x15\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02\x02\x03\x04\x02\x16\x16\x18\x18\x02\x97\x02" +
		"+\x03\x02\x02\x02\x042\x03\x02\x02\x02\x068\x03\x02\x02\x02\b:\x03\x02" +
		"\x02\x02\n?\x03\x02\x02\x02\fC\x03\x02\x02\x02\x0EF\x03\x02\x02\x02\x10" +
		"Q\x03\x02\x02\x02\x12S\x03\x02\x02\x02\x14`\x03\x02\x02\x02\x16j\x03\x02" +
		"\x02\x02\x18o\x03\x02\x02\x02\x1Aq\x03\x02\x02\x02\x1Cx\x03\x02\x02\x02" +
		"\x1E}\x03\x02\x02\x02 \x7F\x03\x02\x02\x02\"\x83\x03\x02\x02\x02$\x8C" +
		"\x03\x02\x02\x02&\x92\x03\x02\x02\x02(*\x05\x04\x03\x02)(\x03\x02\x02" +
		"\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,\x03\x03\x02" +
		"\x02\x02-+\x03\x02\x02\x02.3\x05\x06\x04\x02/0\x05\x10\t\x0201\x07\x03" +
		"\x02\x0213\x03\x02\x02\x022.\x03\x02\x02\x022/\x03\x02\x02\x023\x05\x03" +
		"\x02\x02\x0249\x05\b\x05\x0259\x05\n\x06\x0269\x05\x0E\b\x0279\x05\f\x07" +
		"\x0284\x03\x02\x02\x0285\x03\x02\x02\x0286\x03\x02\x02\x0287\x03\x02\x02" +
		"\x029\x07\x03\x02\x02\x02:;\x07\x04\x02\x02;<\x07\x17\x02\x02<=\x07\x16" +
		"\x02\x02=>\x07\x03\x02\x02>\t\x03\x02\x02\x02?@\x07\x05\x02\x02@A\x07" +
		"\x16\x02\x02AB\x07\x03\x02\x02B\v\x03\x02\x02\x02CD\x07\x06\x02\x02DE" +
		"\x07\x16\x02\x02E\r\x03\x02\x02\x02FG\x07\x07\x02\x02GH\x07\x17\x02\x02" +
		"HI\x07\x16\x02\x02I\x0F\x03\x02\x02\x02JK\x05\x18\r\x02KL\x05\x12\n\x02" +
		"LR\x03\x02\x02\x02MO\x05 \x11\x02NP\x05\x12\n\x02ON\x03\x02\x02\x02OP" +
		"\x03\x02\x02\x02PR\x03\x02\x02\x02QJ\x03\x02\x02\x02QM\x03\x02\x02\x02" +
		"R\x11\x03\x02\x02\x02ST\x05\x16\f\x02T]\x05\x14\v\x02UY\x07\b\x02\x02" +
		"VW\x05\x16\f\x02WX\x05\x14\v\x02XZ\x03\x02\x02\x02YV\x03\x02\x02\x02Y" +
		"Z\x03\x02\x02\x02Z\\\x03\x02\x02\x02[U\x03\x02\x02\x02\\_\x03\x02\x02" +
		"\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^\x13\x03\x02\x02\x02_]\x03\x02" +
		"\x02\x02`e\x05\x1C\x0F\x02ab\x07\t\x02\x02bd\x05\x1C\x0F\x02ca\x03\x02" +
		"\x02\x02dg\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02f\x15\x03" +
		"\x02\x02\x02ge\x03\x02\x02\x02hk\x05\x1A\x0E\x02ik\x07\n\x02\x02jh\x03" +
		"\x02\x02\x02ji\x03\x02\x02\x02k\x17\x03\x02\x02\x02lp\x05&\x14\x02mp\x07" +
		"\x13\x02\x02np\x05\"\x12\x02ol\x03\x02\x02\x02om\x03\x02\x02\x02on\x03" +
		"\x02\x02\x02p\x19\x03\x02\x02\x02qr\x05&\x14\x02r\x1B\x03\x02\x02\x02" +
		"sy\x05&\x14\x02ty\x07\x13\x02\x02uy\x05\"\x12\x02vy\x05 \x11\x02wy\x05" +
		"\x1E\x10\x02xs\x03\x02\x02\x02xt\x03\x02\x02\x02xu\x03\x02\x02\x02xv\x03" +
		"\x02\x02\x02xw\x03\x02\x02\x02y\x1D\x03\x02\x02\x02z~\x05$\x13\x02{~\x07" +
		"\x10\x02\x02|~\x07\x11\x02\x02}z\x03\x02\x02\x02}{\x03\x02\x02\x02}|\x03" +
		"\x02\x02\x02~\x1F\x03\x02\x02\x02\x7F\x80\x07\v\x02\x02\x80\x81\x05\x12" +
		"\n\x02\x81\x82\x07\f\x02\x02\x82!\x03\x02\x02\x02\x83\x87\x07\r\x02\x02" +
		"\x84\x86\x05\x1C\x0F\x02\x85\x84\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02" +
		"\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x8A\x03\x02\x02\x02" +
		"\x89\x87\x03\x02\x02\x02\x8A\x8B\x07\x0E\x02\x02\x8B#\x03\x02\x02\x02" +
		"\x8C\x90\x07\x12\x02\x02\x8D\x91\x07\x1B\x02\x02\x8E\x8F\x07\x0F\x02\x02" +
		"\x8F\x91\x05&\x14\x02\x90\x8D\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02" +
		"\x90\x91\x03\x02\x02\x02\x91%\x03\x02\x02\x02\x92\x93\t\x02\x02\x02\x93" +
		"\'\x03\x02\x02\x02\x10+28OQY]ejox}\x87\x90";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!turtleParser.__ATN) {
			turtleParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(turtleParser._serializedATN));
		}

		return turtleParser.__ATN;
	}

}

export class TurtleDocContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_turtleDoc; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterTurtleDoc) {
			listener.enterTurtleDoc(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitTurtleDoc) {
			listener.exitTurtleDoc(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public directive(): DirectiveContext | undefined {
		return this.tryGetRuleContext(0, DirectiveContext);
	}
	public triples(): TriplesContext | undefined {
		return this.tryGetRuleContext(0, TriplesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_statement; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	public prefixID(): PrefixIDContext | undefined {
		return this.tryGetRuleContext(0, PrefixIDContext);
	}
	public base(): BaseContext | undefined {
		return this.tryGetRuleContext(0, BaseContext);
	}
	public sparqlPrefix(): SparqlPrefixContext | undefined {
		return this.tryGetRuleContext(0, SparqlPrefixContext);
	}
	public sparqlBase(): SparqlBaseContext | undefined {
		return this.tryGetRuleContext(0, SparqlBaseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_directive; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterDirective) {
			listener.enterDirective(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitDirective) {
			listener.exitDirective(this);
		}
	}
}


export class PrefixIDContext extends ParserRuleContext {
	public PNAME_NS(): TerminalNode { return this.getToken(turtleParser.PNAME_NS, 0); }
	public IRIREF(): TerminalNode { return this.getToken(turtleParser.IRIREF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_prefixID; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterPrefixID) {
			listener.enterPrefixID(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitPrefixID) {
			listener.exitPrefixID(this);
		}
	}
}


export class BaseContext extends ParserRuleContext {
	public IRIREF(): TerminalNode { return this.getToken(turtleParser.IRIREF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_base; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterBase) {
			listener.enterBase(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitBase) {
			listener.exitBase(this);
		}
	}
}


export class SparqlBaseContext extends ParserRuleContext {
	public IRIREF(): TerminalNode { return this.getToken(turtleParser.IRIREF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_sparqlBase; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterSparqlBase) {
			listener.enterSparqlBase(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitSparqlBase) {
			listener.exitSparqlBase(this);
		}
	}
}


export class SparqlPrefixContext extends ParserRuleContext {
	public PNAME_NS(): TerminalNode { return this.getToken(turtleParser.PNAME_NS, 0); }
	public IRIREF(): TerminalNode { return this.getToken(turtleParser.IRIREF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_sparqlPrefix; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterSparqlPrefix) {
			listener.enterSparqlPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitSparqlPrefix) {
			listener.exitSparqlPrefix(this);
		}
	}
}


export class TriplesContext extends ParserRuleContext {
	public subject(): SubjectContext | undefined {
		return this.tryGetRuleContext(0, SubjectContext);
	}
	public predicateObjectList(): PredicateObjectListContext | undefined {
		return this.tryGetRuleContext(0, PredicateObjectListContext);
	}
	public blankNodePropertyList(): BlankNodePropertyListContext | undefined {
		return this.tryGetRuleContext(0, BlankNodePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_triples; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterTriples) {
			listener.enterTriples(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitTriples) {
			listener.exitTriples(this);
		}
	}
}


export class PredicateObjectListContext extends ParserRuleContext {
	public verb(): VerbContext[];
	public verb(i: number): VerbContext;
	public verb(i?: number): VerbContext | VerbContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VerbContext);
		} else {
			return this.getRuleContext(i, VerbContext);
		}
	}
	public objectList(): ObjectListContext[];
	public objectList(i: number): ObjectListContext;
	public objectList(i?: number): ObjectListContext | ObjectListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectListContext);
		} else {
			return this.getRuleContext(i, ObjectListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_predicateObjectList; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterPredicateObjectList) {
			listener.enterPredicateObjectList(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitPredicateObjectList) {
			listener.exitPredicateObjectList(this);
		}
	}
}


export class ObjectListContext extends ParserRuleContext {
	public object_(): Object_Context[];
	public object_(i: number): Object_Context;
	public object_(i?: number): Object_Context | Object_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Object_Context);
		} else {
			return this.getRuleContext(i, Object_Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_objectList; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterObjectList) {
			listener.enterObjectList(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitObjectList) {
			listener.exitObjectList(this);
		}
	}
}


export class VerbContext extends ParserRuleContext {
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_verb; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterVerb) {
			listener.enterVerb(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitVerb) {
			listener.exitVerb(this);
		}
	}
}


export class SubjectContext extends ParserRuleContext {
	public iri(): IriContext | undefined {
		return this.tryGetRuleContext(0, IriContext);
	}
	public BlankNode(): TerminalNode | undefined { return this.tryGetToken(turtleParser.BlankNode, 0); }
	public collection(): CollectionContext | undefined {
		return this.tryGetRuleContext(0, CollectionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_subject; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterSubject) {
			listener.enterSubject(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitSubject) {
			listener.exitSubject(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public iri(): IriContext {
		return this.getRuleContext(0, IriContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_predicate; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterPredicate) {
			listener.enterPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitPredicate) {
			listener.exitPredicate(this);
		}
	}
}


export class Object_Context extends ParserRuleContext {
	public iri(): IriContext | undefined {
		return this.tryGetRuleContext(0, IriContext);
	}
	public BlankNode(): TerminalNode | undefined { return this.tryGetToken(turtleParser.BlankNode, 0); }
	public collection(): CollectionContext | undefined {
		return this.tryGetRuleContext(0, CollectionContext);
	}
	public blankNodePropertyList(): BlankNodePropertyListContext | undefined {
		return this.tryGetRuleContext(0, BlankNodePropertyListContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_object_; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterObject_) {
			listener.enterObject_(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitObject_) {
			listener.exitObject_(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public rdfLiteral(): RdfLiteralContext | undefined {
		return this.tryGetRuleContext(0, RdfLiteralContext);
	}
	public NumericLiteral(): TerminalNode | undefined { return this.tryGetToken(turtleParser.NumericLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(turtleParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_literal; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class BlankNodePropertyListContext extends ParserRuleContext {
	public predicateObjectList(): PredicateObjectListContext {
		return this.getRuleContext(0, PredicateObjectListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_blankNodePropertyList; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterBlankNodePropertyList) {
			listener.enterBlankNodePropertyList(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitBlankNodePropertyList) {
			listener.exitBlankNodePropertyList(this);
		}
	}
}


export class CollectionContext extends ParserRuleContext {
	public object_(): Object_Context[];
	public object_(i: number): Object_Context;
	public object_(i?: number): Object_Context | Object_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Object_Context);
		} else {
			return this.getRuleContext(i, Object_Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_collection; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterCollection) {
			listener.enterCollection(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitCollection) {
			listener.exitCollection(this);
		}
	}
}


export class RdfLiteralContext extends ParserRuleContext {
	public String(): TerminalNode { return this.getToken(turtleParser.String, 0); }
	public LANGTAG(): TerminalNode | undefined { return this.tryGetToken(turtleParser.LANGTAG, 0); }
	public iri(): IriContext | undefined {
		return this.tryGetRuleContext(0, IriContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_rdfLiteral; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterRdfLiteral) {
			listener.enterRdfLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitRdfLiteral) {
			listener.exitRdfLiteral(this);
		}
	}
}


export class IriContext extends ParserRuleContext {
	public IRIREF(): TerminalNode | undefined { return this.tryGetToken(turtleParser.IRIREF, 0); }
	public PrefixedName(): TerminalNode | undefined { return this.tryGetToken(turtleParser.PrefixedName, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_iri; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterIri) {
			listener.enterIri(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitIri) {
			listener.exitIri(this);
		}
	}
}


