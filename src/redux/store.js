const { createAction, createReducer } = require("@reduxjs/toolkit")

const initialState = {value : 0}

// createAction 함수 하나로 action 타입과 생성자

const increment = createAction('redux/slice/increment');

const decrement = createAction("redux/slice/decrement")

const action = increment(10);

// reducer 생성
// 툴키트 에서는 기존 switch 문으로 만든 reducer 함수를 만들던 기존 redux 문법과 다르게 createReducer를 사용해서 만든다
// createReducer 에서 action을 처리하기 위해 case reducer를 정의하기 위해서는 두 가지 방법이 있다
// 1. 빌더 콜백 표기법 

const counterReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(increment, (state, action) => {
        state.value++;

    })
    .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) =>{
            state[action.meta.requireId] = 'rejected'
        }
    )
})

// 1. builder.addCase(actionCreator, reducer) => 액션 타입과 정확히 맵핑되는 case reducer를 추가하여 액션을 처리한다
// addMatcher or addDefaultCase 메서드 보다 먼저 작성되어야 된다

// 2. builder.addMatcher(matcher, reducer) => 새로 들어오는 모든 action에 대해서 주어진 패턴과 일치하는지 확인하고 reducer를 실행

// 3. builder.addDefauiltCase(reducer) => 다른 case reducer나 matcher reducer가 실행되지 않았다면 기본 case reducer가 실행됩니다



// 2. 맵 객체 -> map object

// createReducer(initialState, actionMap, actionMatchers, defaultCaseReducer)

const lengthReducer = createReducer(
    // initial state
    {strLen : 0, nonStringActions : 0},
    
    // aciotn map -> normal reducers
    {
        increment: (state, action) => state + action.payload,
        decrement: (state, action) => state - action.payload
    },

    // array of matcher reducers
    [
        {
            matcher: isStringPayloadAction,
            reducer(state, action) {
                state.strLen += action.payload.length
            }
        }
    ]
)