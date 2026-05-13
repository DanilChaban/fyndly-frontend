export interface ApiMutationRequest<TPayload> {
  payload?: TPayload;
  requestId?: number;
}
