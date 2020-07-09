(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{95:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var i=r(0),s=r(82),n=r(2),o=r(17),u=r(14),a=r(3),c=function(){function t(t,e){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=t||{},this.context=e||{}}return t.prototype.getOptions=function(){return this.options},t.prototype.setOptions=function(t,e){void 0===e&&(e=!1),e&&!Object(u.a)(this.options,t)&&(this.previousOptions=this.options),this.options=t},t.prototype.unmount=function(){this.isMounted=!1},t.prototype.refreshClient=function(){var t=this.options&&this.options.client||this.context&&this.context.client;Object(a.b)(!!t,2);var e=!1;return t!==this.client&&(e=!0,this.client=t,this.cleanup()),{client:this.client,isNew:e}},t.prototype.verifyDocumentType=function(t,e){var r=Object(s.e)(t);Object(s.d)(e),Object(s.d)(r.type);Object(a.b)(r.type===e,3)},t}(),p=function(t){function e(e){var r=e.options,i=e.context,s=e.onNewData,n=t.call(this,r,i)||this;return n.previousData={},n.currentObservable={},n.runLazy=!1,n.runLazyQuery=function(t){n.cleanup(),n.runLazy=!0,n.lazyOptions=t,n.onNewData()},n.getExecuteResult=function(){var t=n.getQueryResult();return n.startQuerySubscription(),t},n.obsRefetch=function(t){return n.currentObservable.query.refetch(t)},n.obsFetchMore=function(t){return n.currentObservable.query.fetchMore(t)},n.obsUpdateQuery=function(t){return n.currentObservable.query.updateQuery(t)},n.obsStartPolling=function(t){n.currentObservable&&n.currentObservable.query&&n.currentObservable.query.startPolling(t)},n.obsStopPolling=function(){n.currentObservable&&n.currentObservable.query&&n.currentObservable.query.stopPolling()},n.obsSubscribeToMore=function(t){return n.currentObservable.query.subscribeToMore(t)},n.onNewData=s,n}return Object(i.c)(e,t),e.prototype.execute=function(){this.refreshClient();var t=this.getOptions(),e=t.skip,r=t.query;return(e||r!==this.previousData.query)&&(this.removeQuerySubscription(),this.previousData.query=r),this.updateObservableQuery(),this.isMounted&&this.startQuerySubscription(),this.getExecuteSsrResult()||this.getExecuteResult()},e.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:o.b.ready,called:!1,data:void 0}]},e.prototype.fetchData=function(){var t=this.getOptions();if(t.skip||!1===t.ssr)return!1;var e=this.currentObservable.query;return!!e.getCurrentResult().loading&&e.result()},e.prototype.afterExecute=function(t){var e=(void 0===t?{}:t).lazy,r=void 0!==e&&e;return this.isMounted=!0,r&&!this.runLazy||this.handleErrorOrCompleted(),this.previousOptions=this.getOptions(),this.unmount.bind(this)},e.prototype.cleanup=function(){this.removeQuerySubscription(),delete this.currentObservable.query,delete this.previousData.result},e.prototype.getOptions=function(){var e=t.prototype.getOptions.call(this);return this.lazyOptions&&(e.variables=Object(i.a)(Object(i.a)({},e.variables),this.lazyOptions.variables),e.context=Object(i.a)(Object(i.a)({},e.context),this.lazyOptions.context)),this.runLazy&&delete e.skip,e},e.prototype.ssrInitiated=function(){return this.context&&this.context.renderPromises},e.prototype.getExecuteSsrResult=function(){var t,e=!1===this.getOptions().ssr,r=this.refreshClient().client.disableNetworkFetches,s=Object(i.a)({loading:!0,networkStatus:o.b.loading,called:!0,data:void 0,stale:!1,client:this.client},this.observableQueryFields());return e&&(this.ssrInitiated()||r)?(this.previousData.result=s,s):(this.ssrInitiated()&&(t=this.context.renderPromises.addQueryPromise(this,this.getExecuteResult)||s),t)},e.prototype.prepareObservableQueryOptions=function(){var t=this.getOptions();this.verifyDocumentType(t.query,s.b.Query);var e=t.displayName||"Query";return!this.ssrInitiated()||"network-only"!==t.fetchPolicy&&"cache-and-network"!==t.fetchPolicy||(t.fetchPolicy="cache-first"),Object(i.a)(Object(i.a)({},t),{displayName:e,context:t.context,metadata:{reactComponent:{displayName:e}}})},e.prototype.initializeObservableQuery=function(){var t,e;if(this.ssrInitiated()&&(this.currentObservable.query=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable.query){var r=this.prepareObservableQueryOptions();this.previousData.observableQueryOptions=Object(i.a)(Object(i.a)({},r),{children:null}),this.currentObservable.query=this.refreshClient().client.watchQuery(Object(i.a)({},r)),this.ssrInitiated()&&(null===(e=null===(t=this.context)||void 0===t?void 0:t.renderPromises)||void 0===e||e.registerSSRObservable(this.currentObservable.query,r))}},e.prototype.updateObservableQuery=function(){if(this.currentObservable.query){var t=Object(i.a)(Object(i.a)({},this.prepareObservableQueryOptions()),{children:null});Object(u.a)(t,this.previousData.observableQueryOptions)||(this.previousData.observableQueryOptions=t,this.currentObservable.query.setOptions(t).catch((function(){})))}else this.initializeObservableQuery()},e.prototype.startQuerySubscription=function(){var t=this;if(!this.currentObservable.subscription&&!this.getOptions().skip){var e=this.currentObservable.query;this.currentObservable.subscription=e.subscribe({next:function(e){var r=e.loading,i=e.networkStatus,s=e.data,n=t.previousData.result;n&&n.loading===r&&n.networkStatus===i&&Object(u.a)(n.data,s)||t.onNewData()},error:function(e){if(t.resubscribeToQuery(),!e.hasOwnProperty("graphQLErrors"))throw e;var r=t.previousData.result;(r&&r.loading||!Object(u.a)(e,t.previousData.error))&&(t.previousData.error=e,t.onNewData())}})}},e.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var t=this.currentObservable.query.getLastError(),e=this.currentObservable.query.getLastResult();this.currentObservable.query.resetLastResults(),this.startQuerySubscription(),Object.assign(this.currentObservable.query,{lastError:t,lastResult:e})},e.prototype.getQueryResult=function(){var t=this.observableQueryFields(),e=this.getOptions();if(e.skip)t=Object(i.a)(Object(i.a)({},t),{data:void 0,error:void 0,loading:!1,called:!0});else{var r=this.currentObservable.query.getCurrentResult(),s=r.loading,n=r.partial,u=r.networkStatus,a=r.errors,c=r.error,p=r.data;if(a&&a.length>0&&(c=new o.a({graphQLErrors:a})),t=Object(i.a)(Object(i.a)({},t),{loading:s,networkStatus:u,error:c,called:!0}),s){var l=this.previousData.result&&this.previousData.result.data;t.data=l&&p?Object(i.a)(Object(i.a)({},l),p):l||p}else if(c)Object.assign(t,{data:(this.currentObservable.query.getLastResult()||{}).data});else{var b=this.currentObservable.query.options.fetchPolicy;if(e.partialRefetch&&!p&&n&&"cache-only"!==b)return Object.assign(t,{loading:!0,networkStatus:o.b.loading}),t.refetch(),t;t.data=p}}return t.client=this.client,this.previousData.loading=this.previousData.result&&this.previousData.result.loading||!1,this.previousData.result=t,this.currentObservable.query&&this.currentObservable.query.resetQueryStoreErrors(),t},e.prototype.handleErrorOrCompleted=function(){if(this.currentObservable.query&&this.previousData.result){var t=this.previousData.result,e=t.data,r=t.loading,i=t.error;if(!r){var s=this.getOptions(),n=s.query,o=s.variables,a=s.onCompleted,c=s.onError;if(this.previousOptions&&!this.previousData.loading&&Object(u.a)(this.previousOptions.query,n)&&Object(u.a)(this.previousOptions.variables,o))return;a&&!i?a(e):c&&i&&c(i)}}},e.prototype.removeQuerySubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},e.prototype.observableQueryFields=function(){return{variables:this.currentObservable.query.variables,refetch:this.obsRefetch,fetchMore:this.obsFetchMore,updateQuery:this.obsUpdateQuery,startPolling:this.obsStartPolling,stopPolling:this.obsStopPolling,subscribeToMore:this.obsSubscribeToMore}},e}(c);function l(t,e,r){void 0===r&&(r=!1);var o=Object(n.useContext)(Object(s.c)()),a=Object(n.useReducer)((function(t){return t+1}),0),c=a[0],l=a[1],b=e?Object(i.a)(Object(i.a)({},e),{query:t}):{query:t},h=Object(n.useRef)(),v=h.current||new p({options:b,context:o,onNewData:function(){v.ssrInitiated()?l():Promise.resolve().then(l)}});v.setOptions(b),v.context=o,v.ssrInitiated()&&!h.current&&(h.current=v);var y,d,f,O={options:Object(i.a)(Object(i.a)({},b),{onError:void 0,onCompleted:void 0}),context:o,tick:c},g=(y=function(){return r?v.executeLazy():v.execute()},d=O,(f=Object(n.useRef)()).current&&Object(u.a)(d,f.current.key)||(f.current={key:d,value:y()}),f.current.value),j=r?g[1]:g;return Object(n.useEffect)((function(){return h.current||(h.current=v),function(){return v.cleanup()}}),[]),Object(n.useEffect)((function(){return v.afterExecute({lazy:r})}),[j.loading,j.networkStatus,j.error,j.data]),g}var b=function(t){function e(e){var r=e.options,i=e.context,n=e.result,o=e.setResult,u=t.call(this,r,i)||this;return u.runMutation=function(t){void 0===t&&(t={}),u.onMutationStart();var e=u.generateNewMutationId();return u.mutate(t).then((function(t){return u.onMutationCompleted(t,e),t})).catch((function(t){if(u.onMutationError(t,e),!u.getOptions().onError)throw t}))},u.verifyDocumentType(r.mutation,s.b.Mutation),u.result=n,u.setResult=o,u.mostRecentMutationId=0,u}return Object(i.c)(e,t),e.prototype.execute=function(t){return this.isMounted=!0,this.verifyDocumentType(this.getOptions().mutation,s.b.Mutation),t.client=this.refreshClient().client,[this.runMutation,t]},e.prototype.afterExecute=function(){return this.isMounted=!0,this.unmount.bind(this)},e.prototype.cleanup=function(){},e.prototype.mutate=function(t){var e=this.getOptions(),r=e.mutation,s=e.variables,n=e.optimisticResponse,o=e.update,u=e.context,a=void 0===u?{}:u,c=e.awaitRefetchQueries,p=void 0!==c&&c,l=e.fetchPolicy,b=Object(i.a)({},t),h=Object.assign({},s,b.variables);return delete b.variables,this.refreshClient().client.mutate(Object(i.a)({mutation:r,optimisticResponse:n,refetchQueries:b.refetchQueries||this.getOptions().refetchQueries,awaitRefetchQueries:p,update:o,context:a,fetchPolicy:l,variables:h},b))},e.prototype.onMutationStart=function(){this.result.loading||this.getOptions().ignoreResults||this.updateResult({loading:!0,error:void 0,data:void 0,called:!0})},e.prototype.onMutationCompleted=function(t,e){var r=this.getOptions(),i=r.onCompleted,s=r.ignoreResults,n=t.data,u=t.errors,a=u&&u.length>0?new o.a({graphQLErrors:u}):void 0;this.isMostRecentMutation(e)&&!s&&this.updateResult({called:!0,loading:!1,data:n,error:a}),i&&i(n)},e.prototype.onMutationError=function(t,e){var r=this.getOptions().onError;this.isMostRecentMutation(e)&&this.updateResult({loading:!1,error:t,data:void 0,called:!0}),r&&r(t)},e.prototype.generateNewMutationId=function(){return++this.mostRecentMutationId},e.prototype.isMostRecentMutation=function(t){return this.mostRecentMutationId===t},e.prototype.updateResult=function(t){!this.isMounted||this.previousResult&&Object(u.a)(this.previousResult,t)||(this.setResult(t),this.previousResult=t)},e}(c);var h=function(t){function e(e){var r=e.options,i=e.context,s=e.setResult,n=t.call(this,r,i)||this;return n.currentObservable={},n.setResult=s,n.initialize(r),n}return Object(i.c)(e,t),e.prototype.execute=function(t){if(!0===this.getOptions().skip)return this.cleanup(),{loading:!1,error:void 0,data:void 0,variables:this.getOptions().variables};var e=t;this.refreshClient().isNew&&(e=this.getLoadingResult());var r=this.getOptions().shouldResubscribe;return"function"==typeof r&&(r=!!r(this.getOptions())),!1!==r&&this.previousOptions&&Object.keys(this.previousOptions).length>0&&(this.previousOptions.subscription!==this.getOptions().subscription||!Object(u.a)(this.previousOptions.variables,this.getOptions().variables)||this.previousOptions.skip!==this.getOptions().skip)&&(this.cleanup(),e=this.getLoadingResult()),this.initialize(this.getOptions()),this.startSubscription(),this.previousOptions=this.getOptions(),Object(i.a)(Object(i.a)({},e),{variables:this.getOptions().variables})},e.prototype.afterExecute=function(){this.isMounted=!0},e.prototype.cleanup=function(){this.endSubscription(),delete this.currentObservable.query},e.prototype.initialize=function(t){this.currentObservable.query||!0===this.getOptions().skip||(this.currentObservable.query=this.refreshClient().client.subscribe({query:t.subscription,variables:t.variables,fetchPolicy:t.fetchPolicy}))},e.prototype.startSubscription=function(){this.currentObservable.subscription||(this.currentObservable.subscription=this.currentObservable.query.subscribe({next:this.updateCurrentData.bind(this),error:this.updateError.bind(this),complete:this.completeSubscription.bind(this)}))},e.prototype.getLoadingResult=function(){return{loading:!0,error:void 0,data:void 0}},e.prototype.updateResult=function(t){this.isMounted&&this.setResult(t)},e.prototype.updateCurrentData=function(t){var e=this.getOptions().onSubscriptionData;this.updateResult({data:t.data,loading:!1,error:void 0}),e&&e({client:this.refreshClient().client,subscriptionData:t})},e.prototype.updateError=function(t){this.updateResult({error:t,loading:!1})},e.prototype.completeSubscription=function(){var t=this.getOptions().onSubscriptionComplete;t&&t(),this.endSubscription()},e.prototype.endSubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},e}(c);!function(){function t(){this.queryPromises=new Map,this.queryInfoTrie=new Map}t.prototype.registerSSRObservable=function(t,e){this.lookupQueryInfo(e).observable=t},t.prototype.getSSRObservable=function(t){return this.lookupQueryInfo(t).observable},t.prototype.addQueryPromise=function(t,e){return this.lookupQueryInfo(t.getOptions()).seen?e():(this.queryPromises.set(t.getOptions(),new Promise((function(e){e(t.fetchData())}))),null)},t.prototype.hasPromises=function(){return this.queryPromises.size>0},t.prototype.consumeAndAwaitPromises=function(){var t=this,e=[];return this.queryPromises.forEach((function(r,i){t.lookupQueryInfo(i).seen=!0,e.push(r)})),this.queryPromises.clear(),Promise.all(e)},t.prototype.lookupQueryInfo=function(t){var e=this.queryInfoTrie,r=t.query,i=t.variables,s=e.get(r)||new Map;e.has(r)||e.set(r,s);var n=JSON.stringify(i),o=s.get(n)||{seen:!1,observable:null};return s.has(n)||s.set(n,o),o}}();var v=r(15),y=r.n(v);function d(t){var e=t.children,r=function(t,e){return l(t,e,!1)}(t.query,Object(i.e)(t,["children","query"]));return e&&r?e(r):null}function f(t){var e=function(t,e){var r=Object(n.useContext)(Object(s.c)()),o=Object(n.useState)({called:!1,loading:!1}),u=o[0],a=o[1],c=e?Object(i.a)(Object(i.a)({},e),{mutation:t}):{mutation:t},p=Object(n.useRef)(),l=(p.current||(p.current=new b({options:c,context:r,result:u,setResult:a})),p.current);return l.setOptions(c),l.context=r,Object(n.useEffect)((function(){return l.afterExecute()})),l.execute(u)}(t.mutation,t),r=e[0],o=e[1];return t.children?t.children(r,o):null}function O(t){var e=function(t,e){var r=Object(n.useContext)(Object(s.c)()),o=e?Object(i.a)(Object(i.a)({},e),{subscription:t}):{subscription:t},u=Object(n.useState)({loading:!o.skip,error:void 0,data:void 0}),a=u[0],c=u[1],p=Object(n.useRef)(),l=(p.current||(p.current=new h({options:o,context:r,setResult:c})),p.current);return l.setOptions(o,!0),l.context=r,Object(n.useEffect)((function(){return l.afterExecute()})),Object(n.useEffect)((function(){return l.cleanup.bind(l)}),[]),l.execute(a)}(t.subscription,t);return t.children&&e?t.children(e):null}(d||(d={})).propTypes={client:y.a.object,children:y.a.func.isRequired,fetchPolicy:y.a.string,notifyOnNetworkStatusChange:y.a.bool,onCompleted:y.a.func,onError:y.a.func,pollInterval:y.a.number,query:y.a.object.isRequired,variables:y.a.object,ssr:y.a.bool,partialRefetch:y.a.bool,returnPartialData:y.a.bool},(f||(f={})).propTypes={mutation:y.a.object.isRequired,variables:y.a.object,optimisticResponse:y.a.oneOfType([y.a.object,y.a.func]),refetchQueries:y.a.oneOfType([y.a.arrayOf(y.a.oneOfType([y.a.string,y.a.object])),y.a.func]),awaitRefetchQueries:y.a.bool,update:y.a.func,children:y.a.func.isRequired,onCompleted:y.a.func,onError:y.a.func,fetchPolicy:y.a.string},(O||(O={})).propTypes={subscription:y.a.object.isRequired,variables:y.a.object,children:y.a.func,onSubscriptionData:y.a.func,onSubscriptionComplete:y.a.func,shouldResubscribe:y.a.oneOfType([y.a.func,y.a.bool])}}}]);