const TokenType = {
    // Keywords
    LET: "LET",
    CONST: "CONST",
    FUNC: "FUNC",
    CLASS: "CLASS",
    EXTENDS: "EXTENDS",
    NEW: "NEW",
    RETURN: "RETURN",
    IF: "IF",
    ELSEIF: "ELSEIF",
    ELSE: "ELSE",
    FOR: "FOR",
    WHILE: "WHILE",
    SWITCH: "SWITCH",
    CASE: "CASE",
    BREAK: "BREAK",
    DEFAULT: "DEFAULT",
    IMPORT: "IMPORT",
    EXPORT: "EXPORT",
    EVENT: "EVENT",
    ENUM: "ENUM",
    TRY: "TRY",
    CATCH: "CATCH",
    THROW: "THROW",
    ASYNC: "ASYNC",
    AWAIT: "AWAIT",
    YIELD: "YIELD",
    DELETE: "DELETE",
    STATIC: "STATIC",
    CONSTRUCTOR: "CONSTRUCTOR",
    IS: "IS",
    IS_NOT: "IS_NOT",
    IN: "IN",
    NOT_IN: "NOT_IN",
    AND: "AND",
    OR: "OR",
    NOT: "NOT",
  
    // Identifiers & Literals
    IDENTIFIER: "IDENTIFIER",
    NUMBER: "NUMBER",
    STRING: "STRING",
    BOOLEAN: "BOOLEAN",
    NULL: "NULL",
  
    // Operators
    PLUS: "PLUS",
    MINUS: "MINUS",
    STAR: "STAR",
    SLASH: "SLASH",
    MODULUS: "MODULUS",
    POWER: "POWER",
    QUOTIENT: "QUOTIENT",
    ASSIGN: "ASSIGN",
    EQUAL: "EQUAL",
    STRICT_EQUAL: "STRICT_EQUAL",
    NOT_EQUAL: "NOT_EQUAL",
    STRICT_NOT_EQUAL: "STRICT_NOT_EQUAL",
    LESS: "LESS",
    GREATER: "GREATER",
    LESS_EQUAL: "LESS_EQUAL",
    GREATER_EQUAL: "GREATER_EQUAL",
    REFERENCE_EQUAL: "REFERENCE_EQUAL",
    REFERENCE_NOT_EQUAL: "REFERENCE_NOT_EQUAL",
    LOGICAL_AND: "LOGICAL_AND",
    LOGICAL_OR: "LOGICAL_OR",
    LOGICAL_NOT: "LOGICAL_NOT",
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    QUESTION: "QUESTION",
  
    // Symbols & Punctuation
    LPAREN: "LPAREN",
    RPAREN: "RPAREN",
    LBRACE: "LBRACE",
    RBRACE: "RBRACE",
    LBRACKET: "LBRACKET",
    RBRACKET: "RBRACKET",
    COMMA: "COMMA",
    COLON: "COLON",
    SEMICOLON: "SEMICOLON",
    DOT: "DOT",
    ARROW: "ARROW",
    AT: "AT",

    // ESCAPE SEQUENCES
    ESCAPE_NEWLINE: "ESCAPE_NEWLINE",
    ESCAPE_BACKSLASH: "ESCAPE_BACKSLASH",
    ESCAPE_TAB: "ESCAPE_TAB",

    // Comments & EOF
    COMMENT: "COMMENT",
    EOF: "EOF",
};

const Keywords = [
    TokenType.LET,
    TokenType.CONST,
    TokenType.FUNC,
    TokenType.CLASS,
    TokenType.EXTENDS,
    TokenType.NEW,
    TokenType.RETURN,
    TokenType.IF,
    TokenType.ELSEIF,
    TokenType.ELSE,
    TokenType.FOR,
    TokenType.WHILE,
    TokenType.SWITCH,
    TokenType.CASE,
    TokenType.BREAK,
    TokenType.DEFAULT,
    TokenType.IMPORT,
    TokenType.EXPORT,
    TokenType.EVENT,
    TokenType.ENUM,
    TokenType.TRY,
    TokenType.CATCH,
    TokenType.THROW,
    TokenType.ASYNC,
    TokenType.AWAIT,
    TokenType.YIELD,
    TokenType.DELETE,
    TokenType.STATIC,
    TokenType.CONSTRUCTOR,
    TokenType.IS,
    TokenType.IS_NOT,
    TokenType.IN,
    TokenType.NOT_IN,
    TokenType.AND,
    TokenType.OR,
    TokenType.NOT,
];

class Token {
    constructor(type, lexeme, literal, line) {
        this.type = type;       // The type of the token (e.g., LET, IDENTIFIER, PLUS, etc.)
        this.lexeme = lexeme;   // The actual string representation of the token
        this.literal = literal; // The literal value (if applicable, e.g., numbers or strings)
        this.line = line;       // The line number where the token appears
    }

    toString() {
        return `${this.type} ${this.lexeme} ${this.literal}`;
    }
}
  
class Lexer {
    constructor(source) {
        this.source = source; // The source code to tokenize
        this.tokens = []; // Array to store the generated tokens
        this.start = 0; // Start of the current lexeme
        this.current = 0; // Current position in the source code
        this.line = 1; // Current line number
    }

    tokenize() {
        while (!this.isAtEnd()) {
            this.start = this.current; // Start of the next lexeme
            this.scanToken();
        }

        this.tokens.push(new Token(TokenType.EOF, "", null, this.line)); // Add EOF token
        return this.tokens;
    }

    isAtEnd() {
        return this.current >= this.source.length;
    }

    scanToken() {
        const char = this.advance();
        switch (char) {
            case '(':
                this.addToken(TokenType.LPAREN);
                break;
            case ')':
                this.addToken(TokenType.RPAREN);
                break;
            case '{':
                this.addToken(TokenType.LBRACE);
                break;
            case '}':
                this.addToken(TokenType.RBRACE);
                break;
            case '[':
                this.addToken(TokenType.LBRACKET);
                break;
            case ']':
                this.addToken(TokenType.RBRACKET);
                break;
            case ',':
                this.addToken(TokenType.COMMA);
                break;
            case '.':
                this.addToken(TokenType.DOT);
                break;
            case '-':
                this.addToken(this.match('>') ? TokenType.ARROW : this.match('-') ? TokenType.DECREMENT : TokenType.MINUS);
                break;
            case '+':
                this.addToken(this.match('+') ? TokenType.INCREMENT : TokenType.PLUS);
                break;
            case ';':
                this.addToken(TokenType.SEMICOLON);
                break;
            case ':':
                this.addToken(TokenType.COLON);
                break;
            case '*':
                this.addToken(TokenType.STAR);
                break;
            case '/':
                if (this.match('/')) {
                    // Handle comments
                    while (this.peek() !== '\n' && !this.isAtEnd()) this.advance();
                } else {
                    this.addToken(TokenType.SLASH);
                }
                break;
            case '%':
                this.addToken(TokenType.MODULUS);
                break;
            case '^':
                this.addToken(TokenType.POWER);
                break;
            case '=':
                this.addToken(this.match('=') ? (this.match('=') ? TokenType.STRICT_EQUAL : TokenType.EQUAL) : TokenType.ASSIGN);
                break;
            case '!':
                this.addToken(this.match('=') ? (this.match('=') ? TokenType.STRICT_NOT_EQUAL : TokenType.NOT_EQUAL) : TokenType.LOGICAL_NOT);
                break;
            case '<':
                this.addToken(this.match('=') ? TokenType.LESS_EQUAL : TokenType.LESS);
                break;
            case '>':
                this.addToken(this.match('=') ? TokenType.GREATER_EQUAL : TokenType.GREATER);
                break;
            case '?':
                this.addToken(TokenType.QUESTION);
                break;
            case '@':
                this.addToken(TokenType.AT);
                break;
            case '\\':
                if (this.match('n')) {
                    this.addToken(TokenType.ESCAPE_NEWLINE);
                } else if (this.match('t')) {
                    this.addToken(TokenType.ESCAPE_TAB);
                } else if (this.match('\\')) {
                    this.addToken(TokenType.ESCAPE_BACKSLASH);
                } else {
                    throw new Error(`Unexpected escape sequence at line ${this.line}`);
                }
                break;
            case '"':
                this.string();
                break;
            case '\n':
                this.line++;
                break;
            case ' ':
            case '\r':
            case '\t':
                // Ignore whitespace
                break;
            default:
                if (this.isDigit(char)) {
                    this.number();
                } else if (this.isAlpha(char)) {
                    this.identifier();
                } else {
                    throw new Error(`Unexpected character '${char}' at line ${this.line}`);
                }
                break;
        }
    }

    advance() {
        return this.source[this.current++];
    }

    addToken(type, literal = null) {
        const text = this.source.substring(this.start, this.current);
        this.tokens.push(new Token(type, text, literal, this.line));
    }

    match(expected) {
        if (this.isAtEnd() || this.source[this.current] !== expected) return false;
        this.current++;
        return true;
    }

    peek() {
        return this.isAtEnd() ? '\0' : this.source[this.current];
    }

    peekNext() {
        return this.current + 1 >= this.source.length ? '\0' : this.source[this.current + 1];
    }

    string() {
        while (this.peek() !== '"' && !this.isAtEnd()) {
            if (this.peek() === '\n') this.line++;
            this.advance();
        }

        if (this.isAtEnd()) throw new Error(`Unterminated string at line ${this.line}`);

        this.advance(); // Consume the closing "
        const value = this.source.substring(this.start + 1, this.current - 1);
        this.addToken(TokenType.STRING, value);
    }

    number() {
        if (this.peek() === '0' && (this.peekNext() === 'x' || this.peekNext() === 'X')) {
            // Hexadecimal number
            this.advance(); // Consume '0'
            this.advance(); // Consume 'x' or 'X'
            while (this.isHexDigit(this.peek())) {
                this.advance();
            }
            const text = this.source.substring(this.start, this.current);
            const value = parseInt(text, 16);
            this.addToken(TokenType.NUMBER, value);
            return;
        }

        if (this.peek() === '0' && (this.peekNext() === 'b' || this.peekNext() === 'B')) {
            // Binary number
            this.advance(); // Consume '0'
            this.advance(); // Consume 'b' or 'B'
            while (this.isBinaryDigit(this.peek())) {
                this.advance();
            }
            const text = this.source.substring(this.start, this.current);
            const value = parseInt(text, 2);
            this.addToken(TokenType.NUMBER, value);
            return;
        }

        while (this.isDigit(this.peek()) || this.peek() === '_') {
            if (this.peek() === '_') {
                if (!this.isDigit(this.peekNext())) {
                    throw new Error(`Unexpected '_' at line ${this.line}`);
                }
            }
            this.advance();
        }

        if (this.peek() === '.' && this.isDigit(this.peekNext())) {
            this.advance(); // Consume the '.'

            while (this.isDigit(this.peek()) || this.peek() === '_') {
                if (this.peek() === '_') {
                    if (!this.isDigit(this.peekNext())) {
                        throw new Error(`Unexpected '_' at line ${this.line}`);
                    }
                }
                this.advance();
            }
        }

        const text = this.source.substring(this.start, this.current).replace(/_/g, '');
        if (this.peek() === 'n') {
            this.advance(); // Consume the 'n' for bigint
            const value = BigInt(text);
            this.addToken(TokenType.NUMBER, value);
        } else {
            const value = parseFloat(text);
            this.addToken(TokenType.NUMBER, value);
        }
    }

    isHexDigit(char) {
        return (char >= '0' && char <= '9') || (char >= 'a' && char <= 'f') || (char >= 'A' && char <= 'F');
    }

    isBinaryDigit(char) {
        return char === '0' || char === '1';
    }

    identifier() {
        while (this.isAlphaNumeric(this.peek())) this.advance();

        const text = this.source.substring(this.start, this.current);
        const type = this.getKeywordType(text) || TokenType.IDENTIFIER;
        this.addToken(type);
    }

    getKeywordType(text) {
        const upperText = text.toUpperCase();
        return Keywords.includes(upperText) ? upperText : null;
    }

    isDigit(char) {
        return char >= '0' && char <= '9';
    }

    isAlpha(char) {
        return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === '_';
    }

    isAlphaNumeric(char) {
        return this.isAlpha(char) || this.isDigit(char);
    }
}

class Parser {
    constructor(tokens) {
        this.tokens = tokens;
        this.current = 0; // Current position
    }

    parse() {
        const statements = [];
        while (!this.isAtEnd()) {
            statements.push(this.statement());
        }
        return statements;
    }

    statement() {
        // Example : Parse a statement
        if (this.match(TokenType.LET)) {
            return this.letDeclaration();
        }
        if (this.match(TokenType.FUNC)) {
            return this.funcDeclaration();
        }
        if (this.match(TokenType.RETURN)) {
            return this.returnStatement();
        }
        return this.expressionStatement();
    }

    letDeclaration() {
        const name = this.consume(TokenType.IDENTIFIER, "Expected variable name.");
        this.consume(TokenType.COLON, "Expected ':' after variable name.");
        const type = this.consume(TokenType.IDENTIFIER, "Expected variable type after colon.");
        this.consume(TokenType.ASSIGN, "Expected '=' after variable type.");
        const initializer = this.expression();
        this.consume(TokenType.SEMICOLON, "Expected ';' after variable decleration.");
        return new LetStatement(name, type, initializer);
    }

    funcDeclaration() {
        // Parse a function declaration
        const name = this.consume(TokenType.IDENTIFIER, "Expected function name.");
        this.consume(TokenType.LPAREN, "Expected '(' after function name.");
        const parameters = [];
        const parameterTypes = [];
        if (!this.check(TokenType.RPAREN)) {
            do {
                parameters.push(this.consume(TokenType.IDENTIFIER, "Expected parameter name."));
                this.consume(TokenType.COLON, "Expected ':' after parameter name.");
                parameterTypes.push(this.consume(TokenType.IDENTIFIER, "Expected parameter type after colon."));
            } while (this.match(TokenType.COMMA));
        }
        this.consume(TokenType.RPAREN, "Expected ')' after function parameters.");
        this.consume(TokenType.ARROW, "Expected '->' before function body.");
        const returnType = this.consume(TokenType.IDENTIFIER, "Expected return type after '->'.");
        this.consume(TokenType.LBRACE, "Expected '{' before function body.");
        const body = this.block();
        return new FunctionDeclaration(name, parameters, parameterTypes, returnType, body);
    }

    returnStatement() {
        // Parse a return statement
        const keyword = this.previous();
        let value = null;
        if (!this.check(TokenType.SEMICOLON)) {
            value = this.expression();
        }
        this.consume(TokenType.SEMICOLON, "Expected ';' after return value.");
        return new ReturnStatement(keyword, value);
    }

    tenary() {
        const condition = this.equality(); // Parse the condition (delegates to equality or lower precedence)
        
        if (this.match(TokenType.QUESTION)) { // Check for '?'
            const trueExpr = this.expression(); // Parse the true branch
            this.consume(TokenType.COLON, "Expected ':' after true expression."); // Ensure ':' is present
            const falseExpr = this.expression(); // Parse the false branch
            return new TenaryExpression(condition, trueExpr, falseExpr); // Return a TenaryExpression node
        }
    
        return condition; // If no '?' is found, return the condition as-is
    }
    
    block() {
        const statements = [];
        while (!this.check(TokenType.RBRACE) && !this.isAtEnd()) {
            statements.push(this.statement());
        }
        this.consume(TokenType.RBRACE, "Expected '}' after block.");
        return statements;
    }

    expression() {
        // Process the ternary operator,
        // if not present, delegate to equality, 
        // which delegates to comparison, etc.
        return this.tenary();
    }

    expressionStatement() {
        const expr = this.expression(); // Parse the expression
        this.consume(TokenType.SEMICOLON, "Expected ';' after expression."); // Ensure the expression ends with a semicolon
        return new ExpressionStatement(expr); // Return an ExpressionStatement node
    }

    equality() {
        let expr = this.comparison();
        while (this.match(TokenType.EQUAL, TokenType.NOT_EQUAL)) {
            const operator = this.previous();
            const right = this.comparison();
            expr = new BinaryExpression(expr, operator, right);
        }
        return expr;
    }

    consume(type, message) {
        if (this.isAtEnd()) {
            throw new Error(`Unexpected end of file. ${message}`);
        }
        if (this.check(type)) {
            return this.advance(); // If the token matches, consume it and return it
        }
        throw new Error(`${message} at line ${this.peek().line}`);
    }

    check(type) {
        if (this.isAtEnd()) return false;
        return this.peek().type === type;
    }

    advance() {
        if (!this.isAtEnd()) this.current++;
        return this.previous();
    }

    peek() {
        return this.tokens[this.current];
    }

    previous() {
        return this.tokens[this.current - 1];
    }

    isAtEnd() {
        return this.peek().type === TokenType.EOF;
    }

    match(...types) {
        for (const type of types) {
            if (this.check(type)) {
                this.advance(); // Consume the token if it matches
                return true;
            }
        }
        return false; // No match found
    }

    comparison() {
        let expr = this.term(); // Parse the left-hand side of the comparison
    
        while (this.match(TokenType.LESS, TokenType.LESS_EQUAL, TokenType.GREATER, TokenType.GREATER_EQUAL)) {
            const operator = this.previous(); // Get the comparison operator
            const right = this.term(); // Parse the right-hand side of the comparison
            expr = new BinaryExpression(expr, operator, right); // Create a BinaryExpression node
        }
    
        return expr;
    }

    term() {
        let expr = this.factor(); // Parse the left-hand side of the term
    
        while (this.match(TokenType.PLUS, TokenType.MINUS)) {
            const operator = this.previous(); // Get the operator
            const right = this.factor(); // Parse the right-hand side of the term
            expr = new BinaryExpression(expr, operator, right); // Create a BinaryExpression node
        }
    
        return expr;
    }

    factor() {
        let expr = this.unary(); // Parse the left-hand side of the factor
    
        while (this.match(TokenType.STAR, TokenType.SLASH, TokenType.MODULUS)) {
            const operator = this.previous(); // Get the operator
            const right = this.unary(); // Parse the right-hand side of the factor
            expr = new BinaryExpression(expr, operator, right); // Create a BinaryExpression node
        }
    
        return expr;
    }

    unary() {
        if (this.match(TokenType.MINUS, TokenType.NOT)) {
            const operator = this.previous(); // Get the unary operator
            const right = this.unary(); // Parse the operand
            return new UnaryExpression(operator, right); // Create a UnaryExpression node
        }
    
        return this.primary(); // Fallback to parsing primary expressions
    }

    primary() {
        if (this.match(TokenType.NUMBER)) {
            return new LiteralExpression(this.previous().literal); // Number literal
        }
    
        if (this.match(TokenType.STRING)) {
            return new LiteralExpression(this.previous().literal); // String literal
        }
    
        if (this.match(TokenType.IDENTIFIER)) {
            return new VariableExpression(this.previous()); // Variable reference
        }
    
        if (this.match(TokenType.LPAREN)) {
            const expr = this.expression(); // Parse the inner expression
            this.consume(TokenType.RPAREN, "Expected ')' after expression.");
            return new GroupingExpression(expr); // Grouped expression
        }
    
        throw new Error(`Unexpected token: ${this.peek().lexeme}`);
    }
}

class ASTNode {
    constructor(type) {
        this.type = type; // The type of the AST node (e.g., "BinaryExpression", "LiteralExpression", etc.)
    }
}

class BinaryExpression extends ASTNode {
    constructor(left, operator, right) {
        super("BinaryExpression");
        this.left = left;       // Left-hand side of the binary expression
        this.operator = operator; // Operator token (e.g., PLUS, MINUS, etc.)
        this.right = right;     // Right-hand side of the binary expression
    }
}

class UnaryExpression extends ASTNode {
    constructor(operator, right) {
        super("UnaryExpression");
        this.operator = operator; // Operator token (e.g., MINUS, NOT, etc.)
        this.right = right;       // Operand of the unary expression
    }
}

class LiteralExpression extends ASTNode {
    constructor(value) {
        super("LiteralExpression");
        this.value = value; // The literal value (e.g., number, string, etc.)
    }
}

class VariableExpression extends ASTNode {
    constructor(name) {
        super("VariableExpression");
        this.name = name; // The variable name token
    }
}

class GroupingExpression extends ASTNode {
    constructor(expression) {
        super("GroupingExpression");
        this.expression = expression; // The inner expression
    }
}

class LetStatement extends ASTNode {
    constructor(name, type, initializer) {
        super("LetStatement");
        this.name = name;           // Variable name token
        this.type = type;           // Variable type token
        this.initializer = initializer; // Initial value expression
    }
}

class ExpressionStatement extends ASTNode {
    constructor(expression) {
        super("ExpressionStatement");
        this.expression = expression; // The expression being evaluated
    }
}

class FunctionDeclaration extends ASTNode {
    constructor(name, parameters, parameterTypes, returnType, body) {
        super("FunctionDeclaration");
        this.name = name;           // Function name token
        this.parameters = parameters; // Array of parameter tokens
        this.parameterTypes = parameterTypes; // Array of parameter type tokens
        this.returnType = returnType; // Return type token
        this.body = body;           // Body of the function (a block of statements)
    }
}

class ReturnStatement extends ASTNode {
    constructor(keyword, value) {
        super("ReturnStatement");
        this.keyword = keyword; // The 'return' keyword token
        this.value = value;     // The value to return (an expression)
    }
}

class TenaryExpression extends ASTNode {
    constructor(condition, trueExpr, falseExpr) {
        super("TenaryExpression");
        this.condition = condition; // The condition expression
        this.trueExpr = trueExpr;   // The true expression
        this.falseExpr = falseExpr; // The false expression
    }
}

class Evaluator {
    constructor() {
        this.environment = new Map(); // Store variables in a map
    }
}