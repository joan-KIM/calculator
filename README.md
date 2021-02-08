#  Calculator

[와이어 프레임](https://www.figma.com/file/BsNu8kEhyB4AYJbOOC1uBz/%EA%B3%84%EC%82%B0%EA%B8%B0?node-id=0%3A1)

User Story와 Feature List
|User Story|Feature list|
|--------|----------|
|0~9 버튼을 누르면 해당 숫자를 상단 화면에서 볼 수 있다.|입력된 숫자 상단 화면에 노출(오른쪽 정렬으로 보임)|
|숫자 버튼을 계속 누르면 숫자는 아홉 자리 이상 길어지지 않는다.|- 연산기호를 누르기 전까지 입력되는 숫자가 하나의 피연산자.
| |- 숫자는 9자리까지 입력가능하다.|
|숫자를 입력하고 %를 누르면 백분율 계산 결과를 볼 수 있다.|입력된 숫자 * 1/100을 한 결과|
|= 버튼을 누르면 연산 결과를 볼 수 있다.|연산 결과를 화면에 노출|
|숫자 - 연산자 - 숫자 - '=' 순서로 버튼을 누르면 해당 연산 결과가 나온다.|입력된 숫자를 해당 연산기호에 따라 계산한다.|
|계산 결과 이후에 '=' 버튼을 계속 누르면 계산 결과가 누적된다.|이전 계산 결과 + 입력했던 연산자 + 두번째 피연산자 = 누적계산결과가 보인다.|
|숫자 - 연산자 - '=' 순서로 버튼을 눌러도 연산결과를 볼 수 있다.|피연산자를 하나만 입력한 경우, 두번째 피연산자 = 첫번째 피연산자.
| |(ex)2+= 순서로 버튼을 누르면 2+2=4|
|AC 버튼을 누르면 모든 계산 과정을 초기화 할 수 있다.|계산 과정 초기화(상단 화면에는 0을 띄운다.)|
|C 버튼을 누르면 입력한 숫자를 지울 수 있다.|마지막 연산기호를 누른 뒤 입력한 숫자를 지운다. (상단 화면에는 0을 띄운다.)|
