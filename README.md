#  Calculator

[와이어 프레임](https://www.figma.com/file/BsNu8kEhyB4AYJbOOC1uBz/%EA%B3%84%EC%82%B0%EA%B8%B0?node-id=0%3A1)

User Story와 Feature List
|User Story|Feature list|
|--------|----------|
||초기화면 켜지는 애니메이션|
|0~9 버튼을 누르면 해당 숫자를 상단 화면에서 볼 수 있다.|입력된 숫자 상단 화면에 노출(오른쪽 정렬)|
|초기화면, 숫자입력 초기 시(AC/C버튼 누른 이후)에 0을 누르면 아무 일도 일어나지 않는다.|- 초기화면, AC/C버튼 누른 이후 화면에 0 노출 <br> - 화면이 0인 상태에서 0을 두 번 이상 누를 수 없음|
|숫자 버튼을 계속 누르면 숫자는 아홉 자리 이상 길어지지 않는다.|- 연산기호를 누르기 전까지 숫자 계속 길어짐(아홉자리까지)|
|숫자를 입력하고 %를 누르면 백분율 계산 결과를 볼 수 있다.|% 입력시 현재 숫자 백분율 처리|
|= 버튼을 누르면 연산 결과를 볼 수 있다.|= 누르면 연산 결과를 화면에 노출|
|숫자를 입력하고 '.'를 누르면 소수자리 숫자를 입력할 수 있다.|소수점 이후 숫자 입력|
|소수를 입력한 상태에서 '.'를 누르면 아무일도 일어나지 않는다.|소수 입력후 '.' 누르면 변화 없음|
|숫자 - 연산자 - 숫자 - '=' 순서로 버튼을 누르면 해당 연산 결과가 나온다.|입력된 숫자를 해당 연산기호에 따라 계산|
|계산 결과 이후에 '=' 버튼을 계속 누르면 계산 결과가 누적된다.|연산 이후 '=' 누를 때마다 마지막 피연산자와 연산자로 누적계산|
|숫자 - 연산자 - '=' 순서로 버튼을 눌러도 연산결과를 볼 수 있다.|피연산자를 하나만 입력한 경우 두번째 피연산자=첫번째 피연산자 계산|
|숫자 / 0을 하면 화면에서 Infinity를 볼 수 있다.| 0으로 나눈 결과는 Infinity로 처리|
|AC 버튼을 누르면 모든 계산 과정을 초기화 할 수 있다.|계산 과정 초기화(화면에는 0을 띄움)|
|C 버튼을 누르면 입력한 숫자를 지울 수 있다.|마지막 연산기호를 누른 뒤에 입력한 숫자를 지움(화면에는 0을 띄움)|
|연산 결과가 나온 이후, C를 누르면 초기화 된다.|하나의 연산 결과가 나온 이후 C를 누르면 AC를 눌렀을 때와 같이 초기화|
|연산 결과가 나온 이후, %를 누르면 백분율로 보인다.|연산 결과를 백분율 처리|
|숫자를 누르고 여러개의 연산자를 연달아 누르면 마지막에 누른 연산자로 계산된다.|연산자를 여러개 누르면 마지막에 누른 연산자를 적용하여 계산|
