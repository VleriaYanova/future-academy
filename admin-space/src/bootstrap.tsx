import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App/App";
import {store} from "./redux";
import {Provider} from "react-redux";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    }
})

ReactDOM.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </Provider>,

    document.getElementById('root')
);