# '() {} []' 를 포함하고 있는 문자열 s가 주어졌을 때, 괄호가 유효한지 아닌지 판별


def Valid_Parentheses(str):
    stack = []
    answer = []

    for i in str:
        stack.append(i)

    if stack[0] == ")" or stack[0] == "}" or stack[0] == "]":
        return False

    for i in range(len(stack)):
        if stack[i] == "(" or stack[i] == "{" or stack[i] == "[":
            answer.append(stack[i])
        # elif stack[i] == ")" or stack[i] == "}" or stack[i] == "]":
        #     if stack[i - 1] == "(" or stack[i - 1] == "{" or stack[i - 1] == "[":
        #         answer.pop()
        elif stack[i] == ")":
            pass
        elif stack[-1] == ")" and stack[-2] == "(":
            answer.pop()
        elif stack[-1] == "}" and stack[-2] == "{":
            answer.pop()
        elif stack[-1] == "]" and stack[-2] == "[":
            answer.pop()

    if len(answer) == 0:
        return True
    else:
        return False


print(Valid_Parentheses("([]}"))