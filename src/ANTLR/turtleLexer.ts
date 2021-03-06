// Generated from ./turtle.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class turtleLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "NumericLiteral", "BooleanLiteral", 
		"String", "BlankNode", "WS", "PN_PREFIX", "IRIREF", "PNAME_NS", "PrefixedName", 
		"PNAME_LN", "BLANK_NODE_LABEL", "LANGTAG", "INTEGER", "DECIMAL", "DOUBLE", 
		"EXPONENT", "STRING_LITERAL_LONG_SINGLE_QUOTE", "STRING_LITERAL_LONG_QUOTE", 
		"STRING_LITERAL_QUOTE", "STRING_LITERAL_SINGLE_QUOTE", "UCHAR", "ECHAR", 
		"ANON_WS", "ANON", "PN_CHARS_BASE", "PN_CHARS_U", "PN_CHARS", "PN_LOCAL", 
		"PLX", "PERCENT", "HEX", "PN_LOCAL_ESC",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(turtleLexer._LITERAL_NAMES, turtleLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return turtleLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(turtleLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "turtle.g4"; }

	// @Override
	public get ruleNames(): string[] { return turtleLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return turtleLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return turtleLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return turtleLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02/\u01C6\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t" +
		"\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x8E\n\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\x99\n\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\x9F\n\x11\x03\x12\x03\x12\x05" +
		"\x12\xA3\n\x12\x03\x13\x06\x13\xA6\n\x13\r\x13\x0E\x13\xA7\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x07\x14\xAF\n\x14\f\x14\x0E\x14\xB2\v\x14" +
		"\x03\x14\x05\x14\xB5\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\xBB" +
		"\n\x15\f\x15\x0E\x15\xBE\v\x15\x03\x15\x03\x15\x03\x16\x05\x16\xC3\n\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17\xC9\n\x17\x03\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\xD3\n\x19\x03\x19" +
		"\x03\x19\x07\x19\xD7\n\x19\f\x19\x0E\x19\xDA\v\x19\x03\x19\x05\x19\xDD" +
		"\n\x19\x03\x1A\x03\x1A\x06\x1A\xE1\n\x1A\r\x1A\x0E\x1A\xE2\x03\x1A\x03" +
		"\x1A\x06\x1A\xE7\n\x1A\r\x1A\x0E\x1A\xE8\x07\x1A\xEB\n\x1A\f\x1A\x0E\x1A" +
		"\xEE\v\x1A\x03\x1B\x05\x1B\xF1\n\x1B\x03\x1B\x06\x1B\xF4\n\x1B\r\x1B\x0E" +
		"\x1B\xF5\x03\x1C\x05\x1C\xF9\n\x1C\x03\x1C\x07\x1C\xFC\n\x1C\f\x1C\x0E" +
		"\x1C\xFF\v\x1C\x03\x1C\x03\x1C\x06\x1C\u0103\n\x1C\r\x1C\x0E\x1C\u0104" +
		"\x03\x1D\x05\x1D\u0108\n\x1D\x03\x1D\x06\x1D\u010B\n\x1D\r\x1D\x0E\x1D" +
		"\u010C\x03\x1D\x03\x1D\x07\x1D\u0111\n\x1D\f\x1D\x0E\x1D\u0114\v\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x06\x1D\u0119\n\x1D\r\x1D\x0E\x1D\u011A\x03\x1D\x03" +
		"\x1D\x06\x1D\u011F\n\x1D\r\x1D\x0E\x1D\u0120\x03\x1D\x05\x1D\u0124\n\x1D" +
		"\x03\x1E\x03\x1E\x05\x1E\u0128\n\x1E\x03\x1E\x06\x1E\u012B\n\x1E\r\x1E" +
		"\x0E\x1E\u012C\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x05\x1F\u0136\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u013C\n\x1F" +
		"\x07\x1F\u013E\n\x1F\f\x1F\x0E\x1F\u0141\v\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u014E\n \x03 \x03 \x03" +
		" \x03 \x05 \u0154\n \x07 \u0156\n \f \x0E \u0159\v \x03 \x03 \x03 \x03" +
		" \x03!\x03!\x03!\x03!\x03!\x07!\u0164\n!\f!\x0E!\u0167\v!\x03!\x03!\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x07\"\u0170\n\"\f\"\x0E\"\u0173\v\"\x03\"\x03" +
		"\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u018B\n#\x03$\x03$\x03$\x03%\x03" +
		"%\x03&\x03&\x07&\u0194\n&\f&\x0E&\u0197\v&\x03&\x03&\x03\'\x03\'\x03(" +
		"\x03(\x05(\u019F\n(\x03)\x03)\x05)\u01A3\n)\x03*\x03*\x03*\x05*\u01A8" +
		"\n*\x03*\x03*\x03*\x07*\u01AD\n*\f*\x0E*\u01B0\v*\x03*\x03*\x03*\x05*" +
		"\u01B5\n*\x05*\u01B7\n*\x03+\x03+\x05+\u01BB\n+\x03,\x03,\x03,\x03,\x03" +
		"-\x05-\u01C2\n-\x03.\x03.\x03.\x02\x02\x02/\x03\x02\x03\x05\x02\x04\x07" +
		"\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15" +
		"\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02" +
		"\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191" +
		"\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02" +
		"\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-" +
		"Y\x02.[\x02/\x03\x02\x14\x05\x02\v\f\x0E\x0F\"\"\b\x02%%\'(01<<BB^^\x03" +
		"\x022;\x04\x02C\\c|\x05\x022;C\\c|\x04\x02--//\x04\x02GGgg\x05\x02))^" +
		"^``\x04\x02$$^^\x06\x02\f\f\x0F\x0F$$^^\x06\x02\f\f\x0F\x0F))^^\n\x02" +
		"$$))^^ddhhppttvv\x05\x02\v\f\x0F\x0F\"\"\x0F\x02C\\c|\xC2\xD8\xDA\xF8" +
		"\xFA\u0301\u0372\u037F\u0381\u2001\u200E\u200F\u2072\u2191\u2C02\u2FF1" +
		"\u3003\uD801\uF902\uFDD1\uFDF2\uFFFF\x07\x02//2;\xB9\xB9\u0302\u0371\u2041" +
		"\u2042\x04\x0200<<\x05\x022;CHch\t\x02##%1==??ABaa\x80\x80\x02\u020A\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
		"\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!" +
		"\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02" +
		"\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02" +
		"\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03" +
		"\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02" +
		"\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02" +
		"C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02" +
		"\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02" +
		"\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03" +
		"\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x03]\x03\x02\x02" +
		"\x02\x05_\x03\x02\x02\x02\x07g\x03\x02\x02\x02\tm\x03\x02\x02\x02\vr\x03" +
		"\x02\x02\x02\ry\x03\x02\x02\x02\x0F{\x03\x02\x02\x02\x11}\x03\x02\x02" +
		"\x02\x13\x7F\x03\x02\x02\x02\x15\x81\x03\x02\x02\x02\x17\x83\x03\x02\x02" +
		"\x02\x19\x85\x03\x02\x02\x02\x1B\x87\x03\x02\x02\x02\x1D\x8D\x03\x02\x02" +
		"\x02\x1F\x98\x03\x02\x02\x02!\x9E\x03\x02\x02\x02#\xA2\x03\x02\x02\x02" +
		"%\xA5\x03\x02\x02\x02\'\xAB\x03\x02\x02\x02)\xB6\x03\x02\x02\x02+\xC2" +
		"\x03\x02\x02\x02-\xC8\x03\x02\x02\x02/\xCA\x03\x02\x02\x021\xCD\x03\x02" +
		"\x02\x023\xDE\x03\x02\x02\x025\xF0\x03\x02\x02\x027\xF8\x03\x02\x02\x02" +
		"9\u0107\x03\x02\x02\x02;\u0125\x03\x02\x02\x02=\u012E\x03\x02\x02\x02" +
		"?\u0146\x03\x02\x02\x02A\u015E\x03\x02\x02\x02C\u016A\x03\x02\x02\x02" +
		"E\u018A\x03\x02\x02\x02G\u018C\x03\x02\x02\x02I\u018F\x03\x02\x02\x02" +
		"K\u0191\x03\x02\x02\x02M\u019A\x03\x02\x02\x02O\u019E\x03\x02\x02\x02" +
		"Q\u01A2\x03\x02\x02\x02S\u01A7\x03\x02\x02\x02U\u01BA\x03\x02\x02\x02" +
		"W\u01BC\x03\x02\x02\x02Y\u01C1\x03\x02\x02\x02[\u01C3\x03\x02\x02\x02" +
		"]^\x070\x02\x02^\x04\x03\x02\x02\x02_`\x07B\x02\x02`a\x07r\x02\x02ab\x07" +
		"t\x02\x02bc\x07g\x02\x02cd\x07h\x02\x02de\x07k\x02\x02ef\x07z\x02\x02" +
		"f\x06\x03\x02\x02\x02gh\x07B\x02\x02hi\x07d\x02\x02ij\x07c\x02\x02jk\x07" +
		"u\x02\x02kl\x07g\x02\x02l\b\x03\x02\x02\x02mn\x07D\x02\x02no\x07C\x02" +
		"\x02op\x07U\x02\x02pq\x07G\x02\x02q\n\x03\x02\x02\x02rs\x07R\x02\x02s" +
		"t\x07T\x02\x02tu\x07G\x02\x02uv\x07H\x02\x02vw\x07K\x02\x02wx\x07Z\x02" +
		"\x02x\f\x03\x02\x02\x02yz\x07=\x02\x02z\x0E\x03\x02\x02\x02{|\x07.\x02" +
		"\x02|\x10\x03\x02\x02\x02}~\x07c\x02\x02~\x12\x03\x02\x02\x02\x7F\x80" +
		"\x07]\x02\x02\x80\x14\x03\x02\x02\x02\x81\x82\x07_\x02\x02\x82\x16\x03" +
		"\x02\x02\x02\x83\x84\x07*\x02\x02\x84\x18\x03\x02\x02\x02\x85\x86\x07" +
		"+\x02\x02\x86\x1A\x03\x02\x02\x02\x87\x88\x07`\x02\x02\x88\x89\x07`\x02" +
		"\x02\x89\x1C\x03\x02\x02\x02\x8A\x8E\x055\x1B\x02\x8B\x8E\x057\x1C\x02" +
		"\x8C\x8E\x059\x1D\x02\x8D\x8A\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02" +
		"\x8D\x8C\x03\x02\x02\x02\x8E\x1E\x03\x02\x02\x02\x8F\x90\x07v\x02\x02" +
		"\x90\x91\x07t\x02\x02\x91\x92\x07w\x02\x02\x92\x99\x07g\x02\x02\x93\x94" +
		"\x07h\x02\x02\x94\x95\x07c\x02\x02\x95\x96\x07n\x02\x02\x96\x97\x07u\x02" +
		"\x02\x97\x99\x07g\x02\x02\x98\x8F\x03\x02\x02\x02\x98\x93\x03\x02\x02" +
		"\x02\x99 \x03\x02\x02\x02\x9A\x9F\x05A!\x02\x9B\x9F\x05C\"\x02\x9C\x9F" +
		"\x05=\x1F\x02\x9D\x9F\x05? \x02\x9E\x9A\x03\x02\x02\x02\x9E\x9B\x03\x02" +
		"\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\"\x03\x02" +
		"\x02\x02\xA0\xA3\x051\x19\x02\xA1\xA3\x05K&\x02\xA2\xA0\x03\x02\x02\x02" +
		"\xA2\xA1\x03\x02\x02\x02\xA3$\x03\x02\x02\x02\xA4\xA6\t\x02\x02\x02\xA5" +
		"\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7" +
		"\xA8\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\b\x13\x02\x02\xAA" +
		"&\x03\x02\x02\x02\xAB\xB4\x05M\'\x02\xAC\xAF\x05Q)\x02\xAD\xAF\x070\x02" +
		"\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAD\x03\x02\x02\x02\xAF\xB2\x03\x02\x02" +
		"\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB3\x03\x02\x02" +
		"\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB5\x05Q)\x02\xB4\xB0\x03\x02\x02\x02" +
		"\xB4\xB5\x03\x02\x02\x02\xB5(\x03\x02\x02\x02\xB6\xBC\x07>\x02\x02\xB7" +
		"\xBB\x05Q)\x02\xB8\xBB\t\x03\x02\x02\xB9\xBB\x05E#\x02\xBA\xB7\x03\x02" +
		"\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xB9\x03\x02\x02\x02\xBB\xBE\x03\x02" +
		"\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\x03\x02" +
		"\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC0\x07@\x02\x02\xC0*\x03\x02\x02" +
		"\x02\xC1\xC3\x05\'\x14\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02" +
		"\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x07<\x02\x02\xC5,\x03\x02\x02\x02" +
		"\xC6\xC9\x05/\x18\x02\xC7\xC9\x05+\x16\x02\xC8\xC6\x03\x02\x02\x02\xC8" +
		"\xC7\x03\x02\x02\x02\xC9.\x03\x02\x02\x02\xCA\xCB\x05+\x16\x02\xCB\xCC" +
		"\x05S*\x02\xCC0\x03\x02\x02\x02\xCD\xCE\x07a\x02\x02\xCE\xCF\x07<\x02" +
		"\x02\xCF\xD2\x03\x02\x02\x02\xD0\xD3\x05O(\x02\xD1\xD3\t\x04\x02\x02\xD2" +
		"\xD0\x03\x02\x02\x02\xD2\xD1\x03\x02\x02\x02\xD3\xDC\x03\x02\x02\x02\xD4" +
		"\xD7\x05Q)\x02\xD5\xD7\x070\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD5\x03" +
		"\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03" +
		"\x02\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDD\x05" +
		"Q)\x02\xDC\xD8\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD2\x03\x02\x02" +
		"\x02\xDE\xE0\x07B\x02\x02\xDF\xE1\t\x05\x02\x02\xE0\xDF\x03\x02\x02\x02" +
		"\xE1\xE2\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02" +
		"\xE3\xEC\x03\x02\x02\x02\xE4\xE6\x07/\x02\x02\xE5\xE7\t\x06\x02\x02\xE6" +
		"\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8" +
		"\xE9\x03\x02\x02\x02\xE9\xEB\x03\x02\x02\x02\xEA\xE4\x03\x02\x02\x02\xEB" +
		"\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED" +
		"4\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF1\t\x07\x02\x02\xF0\xEF" +
		"\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xF4" +
		"\t\x04\x02\x02\xF3\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF3" +
		"\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF66\x03\x02\x02\x02\xF7\xF9" +
		"\t\x07\x02\x02\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFD" +
		"\x03\x02\x02\x02\xFA\xFC\t\x04\x02\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFF" +
		"\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0100" +
		"\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0102\x070\x02\x02\u0101" +
		"\u0103\t\x04\x02\x02\u0102\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02" +
		"\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u01058\x03" +
		"\x02\x02\x02\u0106\u0108\t\x07\x02\x02\u0107\u0106\x03\x02\x02\x02\u0107" +
		"\u0108\x03\x02\x02\x02\u0108\u0123\x03\x02\x02\x02\u0109\u010B\t\x04\x02" +
		"\x02\u010A\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010A" +
		"\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02" +
		"\u010E\u0112\x070\x02\x02\u010F\u0111\t\x04\x02\x02\u0110\u010F\x03\x02" +
		"\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112" +
		"\u0113\x03\x02\x02\x02\u0113\u0115\x03\x02\x02\x02\u0114\u0112\x03\x02" +
		"\x02\x02\u0115\u0124\x05;\x1E\x02\u0116\u0118\x070\x02\x02\u0117\u0119" +
		"\t\x04\x02\x02\u0118\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02" +
		"\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x03" +
		"\x02\x02\x02\u011C\u0124\x05;\x1E\x02\u011D\u011F\t\x04\x02\x02\u011E" +
		"\u011D\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u011E\x03\x02" +
		"\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122" +
		"\u0124\x05;\x1E\x02\u0123\u010A\x03\x02\x02\x02\u0123\u0116\x03\x02\x02" +
		"\x02\u0123\u011E\x03\x02\x02\x02\u0124:\x03\x02\x02\x02\u0125\u0127\t" +
		"\b\x02\x02\u0126\u0128\t\x07\x02\x02\u0127\u0126\x03\x02\x02\x02\u0127" +
		"\u0128\x03\x02\x02\x02\u0128\u012A\x03\x02\x02\x02\u0129\u012B\t\x04\x02" +
		"\x02\u012A\u0129\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012A" +
		"\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D<\x03\x02\x02\x02\u012E" +
		"\u012F\x07)\x02\x02\u012F\u0130\x07)\x02\x02\u0130\u0131\x07)\x02\x02" +
		"\u0131\u013F\x03\x02\x02\x02\u0132\u0136\x07)\x02\x02\u0133\u0134\x07" +
		")\x02\x02\u0134\u0136\x07)\x02\x02\u0135\u0132\x03\x02\x02\x02\u0135\u0133" +
		"\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u013B\x03\x02\x02\x02" +
		"\u0137\u013C\t\t\x02\x02\u0138\u013C\x05G$\x02\u0139\u013C\x05E#\x02\u013A" +
		"\u013C\x07$\x02\x02\u013B\u0137\x03\x02\x02\x02\u013B\u0138\x03\x02\x02" +
		"\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013A\x03\x02\x02\x02\u013C\u013E" +
		"\x03\x02\x02\x02\u013D\u0135\x03\x02\x02\x02\u013E\u0141\x03\x02\x02\x02" +
		"\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0142\x03" +
		"\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0142\u0143\x07)\x02\x02\u0143" +
		"\u0144\x07)\x02\x02\u0144\u0145\x07)\x02\x02\u0145>\x03\x02\x02\x02\u0146" +
		"\u0147\x07$\x02\x02\u0147\u0148\x07$\x02\x02\u0148\u0149\x07$\x02\x02" +
		"\u0149\u0157\x03\x02\x02\x02\u014A\u014E\x07$\x02\x02\u014B\u014C\x07" +
		"$\x02\x02\u014C\u014E\x07$\x02\x02\u014D\u014A\x03\x02\x02\x02\u014D\u014B" +
		"\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u0153\x03\x02\x02\x02" +
		"\u014F\u0154\n\n\x02\x02\u0150\u0154\x05G$\x02\u0151\u0154\x05E#\x02\u0152" +
		"\u0154\x07)\x02\x02\u0153\u014F\x03\x02\x02\x02\u0153\u0150\x03\x02\x02" +
		"\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0152\x03\x02\x02\x02\u0154\u0156" +
		"\x03\x02\x02\x02\u0155\u014D\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02" +
		"\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015A\x03" +
		"\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u015A\u015B\x07$\x02\x02\u015B" +
		"\u015C\x07$\x02\x02\u015C\u015D\x07$\x02\x02\u015D@\x03\x02\x02\x02\u015E" +
		"\u0165\x07$\x02\x02\u015F\u0164\n\v\x02\x02\u0160\u0164\x07)\x02\x02\u0161" +
		"\u0162\x07^\x02\x02\u0162\u0164\x07$\x02\x02\u0163\u015F\x03\x02\x02\x02" +
		"\u0163\u0160\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0164\u0167\x03" +
		"\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166" +
		"\u0168\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0168\u0169\x07$\x02" +
		"\x02\u0169B\x03\x02\x02\x02\u016A\u0171\x07)\x02\x02\u016B\u0170\n\f\x02" +
		"\x02\u016C\u0170\x05G$\x02\u016D\u0170\x05E#\x02\u016E\u0170\x07$\x02" +
		"\x02\u016F\u016B\x03\x02\x02\x02\u016F\u016C\x03\x02\x02\x02\u016F\u016D" +
		"\x03\x02\x02\x02\u016F\u016E\x03\x02\x02\x02\u0170\u0173\x03\x02\x02\x02" +
		"\u0171\u016F\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0174\x03" +
		"\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0174\u0175\x07)\x02\x02\u0175" +
		"D\x03\x02\x02\x02\u0176\u0177\x07^\x02\x02\u0177\u0178\x07w\x02\x02\u0178" +
		"\u0179\x03\x02\x02\x02\u0179\u017A\x05Y-\x02\u017A\u017B\x05Y-\x02\u017B" +
		"\u017C\x05Y-\x02\u017C\u017D\x05Y-\x02\u017D\u018B\x03\x02\x02\x02\u017E" +
		"\u017F\x07^\x02\x02\u017F\u0180\x07W\x02\x02\u0180\u0181\x03\x02\x02\x02" +
		"\u0181\u0182\x05Y-\x02\u0182\u0183\x05Y-\x02\u0183\u0184\x05Y-\x02\u0184" +
		"\u0185\x05Y-\x02\u0185\u0186\x05Y-\x02\u0186\u0187\x05Y-\x02\u0187\u0188" +
		"\x05Y-\x02\u0188\u0189\x05Y-\x02\u0189\u018B\x03\x02\x02\x02\u018A\u0176" +
		"\x03\x02\x02\x02\u018A\u017E\x03\x02\x02\x02\u018BF\x03\x02\x02\x02\u018C" +
		"\u018D\x07^\x02\x02\u018D\u018E\t\r\x02\x02\u018EH\x03\x02\x02\x02\u018F" +
		"\u0190\t\x0E\x02\x02\u0190J\x03\x02\x02\x02\u0191\u0195\x07]\x02\x02\u0192" +
		"\u0194\x05I%\x02\u0193\u0192\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02" +
		"\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0198\x03" +
		"\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0198\u0199\x07_\x02\x02\u0199" +
		"L\x03\x02\x02\x02\u019A\u019B\t\x0F\x02\x02\u019BN\x03\x02\x02\x02\u019C" +
		"\u019F\x05M\'\x02\u019D\u019F\x07a\x02\x02\u019E\u019C\x03\x02\x02\x02" +
		"\u019E\u019D\x03\x02\x02\x02\u019FP\x03\x02\x02\x02\u01A0\u01A3\x05O(" +
		"\x02\u01A1\u01A3\t\x10\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A1" +
		"\x03\x02\x02\x02\u01A3R\x03\x02\x02\x02\u01A4\u01A8\x05O(\x02\u01A5\u01A8" +
		"\x042<\x02\u01A6\u01A8\x05U+\x02\u01A7\u01A4\x03\x02\x02\x02\u01A7\u01A5" +
		"\x03\x02\x02\x02\u01A7\u01A6\x03\x02\x02\x02\u01A8\u01B6\x03\x02\x02\x02" +
		"\u01A9\u01AD\x05Q)\x02\u01AA\u01AD\t\x11\x02\x02\u01AB\u01AD\x05U+\x02" +
		"\u01AC\u01A9\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AB\x03" +
		"\x02\x02\x02\u01AD\u01B0\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE" +
		"\u01AF\x03\x02\x02\x02\u01AF\u01B4\x03\x02\x02\x02\u01B0\u01AE\x03\x02" +
		"\x02\x02\u01B1\u01B5\x05Q)\x02\u01B2\u01B5\x07<\x02\x02\u01B3\u01B5\x05" +
		"U+\x02\u01B4\u01B1\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B3" +
		"\x03\x02\x02\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6\u01AE\x03\x02\x02\x02" +
		"\u01B6\u01B7\x03\x02\x02\x02\u01B7T\x03\x02\x02\x02\u01B8\u01BB\x05W," +
		"\x02\u01B9\u01BB\x05[.\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01B9\x03" +
		"\x02\x02\x02\u01BBV\x03\x02\x02\x02\u01BC\u01BD\x07\'\x02\x02\u01BD\u01BE" +
		"\x05Y-\x02\u01BE\u01BF\x05Y-\x02\u01BFX\x03\x02\x02\x02\u01C0\u01C2\t" +
		"\x12\x02\x02\u01C1\u01C0\x03\x02\x02\x02\u01C2Z\x03\x02\x02\x02\u01C3" +
		"\u01C4\x07^\x02\x02\u01C4\u01C5\t\x13\x02\x02\u01C5\\\x03\x02\x02\x02" +
		"9\x02\x8D\x98\x9E\xA2\xA5\xA7\xAE\xB0\xB4\xBA\xBC\xC2\xC8\xD2\xD6\xD8" +
		"\xDC\xE2\xE8\xEC\xF0\xF5\xF8\xFD\u0104\u0107\u010C\u0112\u011A\u0120\u0123" +
		"\u0127\u012C\u0135\u013B\u013F\u014D\u0153\u0157\u0163\u0165\u016F\u0171" +
		"\u018A\u0195\u019E\u01A2\u01A7\u01AC\u01AE\u01B4\u01B6\u01BA\u01C1\x03" +
		"\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!turtleLexer.__ATN) {
			turtleLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(turtleLexer._serializedATN));
		}

		return turtleLexer.__ATN;
	}

}

