/* eslint-disable */
// @ts-nocheck

import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  Json: { input: any; output: any; }
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  count: Scalars['Int']['output'];
};

export type Asset = Entity & Node & {
  coverImgCategory: Array<Category>;
  coverImgSneaker: Array<Sneaker>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  documentInStages: Array<Asset>;
  fileName: Scalars['String']['output'];
  handle: Scalars['String']['output'];
  height?: Maybe<Scalars['Float']['output']>;
  highlightImagesSneaker: Array<Sneaker>;
  history: Array<Version>;
  id: Scalars['ID']['output'];
  imagesSneaker: Array<Sneaker>;
  locale: Locale;
  localizations: Array<Asset>;
  mimeType?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  size?: Maybe<Scalars['Float']['output']>;
  stage: Stage;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Float']['output']>;
};


export type AssetCoverImgCategoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type AssetCoverImgSneakerArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SneakerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SneakerWhereInput>;
};


export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type AssetHighlightImagesSneakerArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SneakerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SneakerWhereInput>;
};


export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type AssetImagesSneakerArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SneakerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SneakerWhereInput>;
};


export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: AssetWhereUniqueInput;
};

export type AssetConnection = {
  aggregate: Aggregate;
  edges: Array<AssetEdge>;
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  coverImgCategory?: InputMaybe<CategoryCreateManyInlineInput>;
  coverImgSneaker?: InputMaybe<SneakerCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  highlightImagesSneaker?: InputMaybe<SneakerCreateManyInlineInput>;
  imagesSneaker?: InputMaybe<SneakerCreateManyInlineInput>;
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  connect?: InputMaybe<AssetWhereUniqueInput>;
  create?: InputMaybe<AssetCreateInput>;
};

export type AssetEdge = {
  cursor: Scalars['String']['output'];
  node: Asset;
};

export type AssetManyWhereInput = {
  AND?: InputMaybe<Array<AssetWhereInput>>;
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  OR?: InputMaybe<Array<AssetWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  coverImgCategory_every?: InputMaybe<CategoryWhereInput>;
  coverImgCategory_none?: InputMaybe<CategoryWhereInput>;
  coverImgCategory_some?: InputMaybe<CategoryWhereInput>;
  coverImgSneaker_every?: InputMaybe<SneakerWhereInput>;
  coverImgSneaker_none?: InputMaybe<SneakerWhereInput>;
  coverImgSneaker_some?: InputMaybe<SneakerWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  highlightImagesSneaker_every?: InputMaybe<SneakerWhereInput>;
  highlightImagesSneaker_none?: InputMaybe<SneakerWhereInput>;
  highlightImagesSneaker_some?: InputMaybe<SneakerWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imagesSneaker_every?: InputMaybe<SneakerWhereInput>;
  imagesSneaker_none?: InputMaybe<SneakerWhereInput>;
  imagesSneaker_some?: InputMaybe<SneakerWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  coverImgCategory?: InputMaybe<CategoryUpdateManyInlineInput>;
  coverImgSneaker?: InputMaybe<SneakerUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  highlightImagesSneaker?: InputMaybe<SneakerUpdateManyInlineInput>;
  imagesSneaker?: InputMaybe<SneakerUpdateManyInlineInput>;
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  delete?: InputMaybe<Array<Locale>>;
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  connect?: InputMaybe<Array<AssetConnectInput>>;
  create?: InputMaybe<Array<AssetCreateInput>>;
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  data: AssetUpdateManyInput;
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  connect?: InputMaybe<AssetWhereUniqueInput>;
  create?: InputMaybe<AssetCreateInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  create: AssetCreateInput;
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  data: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};

export type AssetWhereComparatorInput = {
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetWhereInput = {
  AND?: InputMaybe<Array<AssetWhereInput>>;
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  OR?: InputMaybe<Array<AssetWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  coverImgCategory_every?: InputMaybe<CategoryWhereInput>;
  coverImgCategory_none?: InputMaybe<CategoryWhereInput>;
  coverImgCategory_some?: InputMaybe<CategoryWhereInput>;
  coverImgSneaker_every?: InputMaybe<SneakerWhereInput>;
  coverImgSneaker_none?: InputMaybe<SneakerWhereInput>;
  coverImgSneaker_some?: InputMaybe<SneakerWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  handle_not?: InputMaybe<Scalars['String']['input']>;
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  height_not?: InputMaybe<Scalars['Float']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  highlightImagesSneaker_every?: InputMaybe<SneakerWhereInput>;
  highlightImagesSneaker_none?: InputMaybe<SneakerWhereInput>;
  highlightImagesSneaker_some?: InputMaybe<SneakerWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imagesSneaker_every?: InputMaybe<SneakerWhereInput>;
  imagesSneaker_none?: InputMaybe<SneakerWhereInput>;
  imagesSneaker_some?: InputMaybe<SneakerWhereInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  size_not?: InputMaybe<Scalars['Float']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  width_not?: InputMaybe<Scalars['Float']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type AssetWhereStageInput = {
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  stage?: InputMaybe<Stage>;
};

export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  count: Scalars['Long']['output'];
};

export type Brand = Entity & Node & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  documentInStages: Array<Brand>;
  history: Array<Version>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  sneakers: Array<Sneaker>;
  stage: Stage;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
};


export type BrandCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BrandDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type BrandHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type BrandPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type BrandScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type BrandSneakersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SneakerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SneakerWhereInput>;
};


export type BrandUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type BrandConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: BrandWhereUniqueInput;
};

export type BrandConnection = {
  aggregate: Aggregate;
  edges: Array<BrandEdge>;
  pageInfo: PageInfo;
};

export type BrandCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  sneakers?: InputMaybe<SneakerCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BrandCreateManyInlineInput = {
  connect?: InputMaybe<Array<BrandWhereUniqueInput>>;
  create?: InputMaybe<Array<BrandCreateInput>>;
};

export type BrandCreateOneInlineInput = {
  connect?: InputMaybe<BrandWhereUniqueInput>;
  create?: InputMaybe<BrandCreateInput>;
};

export type BrandEdge = {
  cursor: Scalars['String']['output'];
  node: Brand;
};

export type BrandManyWhereInput = {
  AND?: InputMaybe<Array<BrandWhereInput>>;
  NOT?: InputMaybe<Array<BrandWhereInput>>;
  OR?: InputMaybe<Array<BrandWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BrandWhereStageInput>;
  documentInStages_none?: InputMaybe<BrandWhereStageInput>;
  documentInStages_some?: InputMaybe<BrandWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  sneakers_every?: InputMaybe<SneakerWhereInput>;
  sneakers_none?: InputMaybe<SneakerWhereInput>;
  sneakers_some?: InputMaybe<SneakerWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BrandOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type BrandUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sneakers?: InputMaybe<SneakerUpdateManyInlineInput>;
};

export type BrandUpdateManyInlineInput = {
  connect?: InputMaybe<Array<BrandConnectInput>>;
  create?: InputMaybe<Array<BrandCreateInput>>;
  delete?: InputMaybe<Array<BrandWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<BrandWhereUniqueInput>>;
  set?: InputMaybe<Array<BrandWhereUniqueInput>>;
  update?: InputMaybe<Array<BrandUpdateWithNestedWhereUniqueInput>>;
  upsert?: InputMaybe<Array<BrandUpsertWithNestedWhereUniqueInput>>;
};

export type BrandUpdateManyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BrandUpdateManyWithNestedWhereInput = {
  data: BrandUpdateManyInput;
  where: BrandWhereInput;
};

export type BrandUpdateOneInlineInput = {
  connect?: InputMaybe<BrandWhereUniqueInput>;
  create?: InputMaybe<BrandCreateInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<BrandUpdateWithNestedWhereUniqueInput>;
  upsert?: InputMaybe<BrandUpsertWithNestedWhereUniqueInput>;
};

export type BrandUpdateWithNestedWhereUniqueInput = {
  data: BrandUpdateInput;
  where: BrandWhereUniqueInput;
};

export type BrandUpsertInput = {
  create: BrandCreateInput;
  update: BrandUpdateInput;
};

export type BrandUpsertWithNestedWhereUniqueInput = {
  data: BrandUpsertInput;
  where: BrandWhereUniqueInput;
};

export type BrandWhereComparatorInput = {
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BrandWhereInput = {
  AND?: InputMaybe<Array<BrandWhereInput>>;
  NOT?: InputMaybe<Array<BrandWhereInput>>;
  OR?: InputMaybe<Array<BrandWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<BrandWhereStageInput>;
  documentInStages_none?: InputMaybe<BrandWhereStageInput>;
  documentInStages_some?: InputMaybe<BrandWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  sneakers_every?: InputMaybe<SneakerWhereInput>;
  sneakers_none?: InputMaybe<SneakerWhereInput>;
  sneakers_some?: InputMaybe<SneakerWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type BrandWhereStageInput = {
  AND?: InputMaybe<Array<BrandWhereStageInput>>;
  NOT?: InputMaybe<Array<BrandWhereStageInput>>;
  OR?: InputMaybe<Array<BrandWhereStageInput>>;
  compareWithParent?: InputMaybe<BrandWhereComparatorInput>;
  stage?: InputMaybe<Stage>;
};

export type BrandWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Category = Entity & Node & {
  coverImg: Asset;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  description: Scalars['String']['output'];
  documentInStages: Array<Category>;
  history: Array<Version>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  sneakers: Array<CategorySneakers>;
  stage: Stage;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
};


export type CategoryCoverImgArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CategoryCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type CategoryHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type CategoryPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CategoryScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CategorySneakersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CategoryConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: CategoryWhereUniqueInput;
};

export type CategoryConnection = {
  aggregate: Aggregate;
  edges: Array<CategoryEdge>;
  pageInfo: PageInfo;
};

export type CategoryCreateInput = {
  coverImg: AssetCreateOneInlineInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  sneakers?: InputMaybe<CategorySneakersCreateManyInlineInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateManyInlineInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  create?: InputMaybe<Array<CategoryCreateInput>>;
};

export type CategoryCreateOneInlineInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  create?: InputMaybe<CategoryCreateInput>;
};

export type CategoryEdge = {
  cursor: Scalars['String']['output'];
  node: Category;
};

export type CategoryManyWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  coverImg?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<CategoryWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  sneakers_empty?: InputMaybe<Scalars['Boolean']['input']>;
  sneakers_some?: InputMaybe<CategorySneakersWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CategorySneakers = Sneaker;

export type CategorySneakersConnectInput = {
  Sneaker?: InputMaybe<SneakerConnectInput>;
};

export type CategorySneakersCreateInput = {
  Sneaker?: InputMaybe<SneakerCreateInput>;
};

export type CategorySneakersCreateManyInlineInput = {
  connect?: InputMaybe<Array<CategorySneakersWhereUniqueInput>>;
  create?: InputMaybe<Array<CategorySneakersCreateInput>>;
};

export type CategorySneakersCreateOneInlineInput = {
  connect?: InputMaybe<CategorySneakersWhereUniqueInput>;
  create?: InputMaybe<CategorySneakersCreateInput>;
};

export type CategorySneakersUpdateInput = {
  Sneaker?: InputMaybe<SneakerUpdateInput>;
};

export type CategorySneakersUpdateManyInlineInput = {
  connect?: InputMaybe<Array<CategorySneakersConnectInput>>;
  create?: InputMaybe<Array<CategorySneakersCreateInput>>;
  delete?: InputMaybe<Array<CategorySneakersWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CategorySneakersWhereUniqueInput>>;
  set?: InputMaybe<Array<CategorySneakersWhereUniqueInput>>;
  update?: InputMaybe<Array<CategorySneakersUpdateWithNestedWhereUniqueInput>>;
  upsert?: InputMaybe<Array<CategorySneakersUpsertWithNestedWhereUniqueInput>>;
};

export type CategorySneakersUpdateManyWithNestedWhereInput = {
  Sneaker?: InputMaybe<SneakerUpdateManyWithNestedWhereInput>;
};

export type CategorySneakersUpdateOneInlineInput = {
  connect?: InputMaybe<CategorySneakersWhereUniqueInput>;
  create?: InputMaybe<CategorySneakersCreateInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CategorySneakersUpdateWithNestedWhereUniqueInput>;
  upsert?: InputMaybe<CategorySneakersUpsertWithNestedWhereUniqueInput>;
};

export type CategorySneakersUpdateWithNestedWhereUniqueInput = {
  Sneaker?: InputMaybe<SneakerUpdateWithNestedWhereUniqueInput>;
};

export type CategorySneakersUpsertWithNestedWhereUniqueInput = {
  Sneaker?: InputMaybe<SneakerUpsertWithNestedWhereUniqueInput>;
};

export type CategorySneakersWhereInput = {
  Sneaker?: InputMaybe<SneakerWhereInput>;
};

export type CategorySneakersWhereUniqueInput = {
  Sneaker?: InputMaybe<SneakerWhereUniqueInput>;
};

export type CategoryUpdateInput = {
  coverImg?: InputMaybe<AssetUpdateOneInlineInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sneakers?: InputMaybe<CategorySneakersUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryUpdateManyInlineInput = {
  connect?: InputMaybe<Array<CategoryConnectInput>>;
  create?: InputMaybe<Array<CategoryCreateInput>>;
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
  upsert?: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  data: CategoryUpdateManyInput;
  where: CategoryWhereInput;
};

export type CategoryUpdateOneInlineInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  create?: InputMaybe<CategoryCreateInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>;
  upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertInput = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  data: CategoryUpsertInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryWhereComparatorInput = {
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  coverImg?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<CategoryWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  sneakers_empty?: InputMaybe<Scalars['Boolean']['input']>;
  sneakers_some?: InputMaybe<CategorySneakersWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type CategoryWhereStageInput = {
  AND?: InputMaybe<Array<CategoryWhereStageInput>>;
  NOT?: InputMaybe<Array<CategoryWhereStageInput>>;
  OR?: InputMaybe<Array<CategoryWhereStageInput>>;
  compareWithParent?: InputMaybe<CategoryWhereComparatorInput>;
  stage?: InputMaybe<Stage>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Color = {
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  end?: InputMaybe<Scalars['Boolean']['input']>;
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  format?: InputMaybe<DocumentFileTypes>;
};

export type DocumentTransformationInput = {
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type Entity = {
  id: Scalars['ID']['output'];
  stage: Stage;
};

export enum EntityTypeName {
  Asset = 'Asset',
  Brand = 'Brand',
  Category = 'Category',
  Rating = 'Rating',
  ScheduledOperation = 'ScheduledOperation',
  ScheduledRelease = 'ScheduledRelease',
  Sneaker = 'Sneaker',
  User = 'User'
}

export type EntityWhereInput = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  typename: EntityTypeName;
};

export enum ImageFit {
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale'
}

export type ImageResizeInput = {
  fit?: InputMaybe<ImageFit>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageTransformationInput = {
  resize?: InputMaybe<ImageResizeInput>;
};

export enum Locale {
  En = 'en'
}

export type Location = {
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


export type LocationDistanceArgs = {
  from: LocationInput;
};

export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  /** @deprecated Asset mutations will be overhauled soon */
  createAsset?: Maybe<Asset>;
  createBrand?: Maybe<Brand>;
  createCategory?: Maybe<Category>;
  createRating?: Maybe<Rating>;
  createScheduledRelease?: Maybe<ScheduledRelease>;
  createSneaker?: Maybe<Sneaker>;
  deleteAsset?: Maybe<Asset>;
  deleteBrand?: Maybe<Brand>;
  deleteCategory?: Maybe<Category>;
  /** @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection) */
  deleteManyAssets: BatchPayload;
  deleteManyAssetsConnection: AssetConnection;
  /** @deprecated Please use the new paginated many mutation (deleteManyBrandsConnection) */
  deleteManyBrands: BatchPayload;
  deleteManyBrandsConnection: BrandConnection;
  /** @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection) */
  deleteManyCategories: BatchPayload;
  deleteManyCategoriesConnection: CategoryConnection;
  /** @deprecated Please use the new paginated many mutation (deleteManyRatingsConnection) */
  deleteManyRatings: BatchPayload;
  deleteManyRatingsConnection: RatingConnection;
  /** @deprecated Please use the new paginated many mutation (deleteManySneakersConnection) */
  deleteManySneakers: BatchPayload;
  deleteManySneakersConnection: SneakerConnection;
  deleteRating?: Maybe<Rating>;
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  deleteSneaker?: Maybe<Sneaker>;
  publishAsset?: Maybe<Asset>;
  publishBrand?: Maybe<Brand>;
  publishCategory?: Maybe<Category>;
  /** @deprecated Please use the new paginated many mutation (publishManyAssetsConnection) */
  publishManyAssets: BatchPayload;
  publishManyAssetsConnection: AssetConnection;
  /** @deprecated Please use the new paginated many mutation (publishManyBrandsConnection) */
  publishManyBrands: BatchPayload;
  publishManyBrandsConnection: BrandConnection;
  /** @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection) */
  publishManyCategories: BatchPayload;
  publishManyCategoriesConnection: CategoryConnection;
  /** @deprecated Please use the new paginated many mutation (publishManyRatingsConnection) */
  publishManyRatings: BatchPayload;
  publishManyRatingsConnection: RatingConnection;
  /** @deprecated Please use the new paginated many mutation (publishManySneakersConnection) */
  publishManySneakers: BatchPayload;
  publishManySneakersConnection: SneakerConnection;
  publishRating?: Maybe<Rating>;
  publishSneaker?: Maybe<Sneaker>;
  schedulePublishAsset?: Maybe<Asset>;
  schedulePublishBrand?: Maybe<Brand>;
  schedulePublishCategory?: Maybe<Category>;
  schedulePublishRating?: Maybe<Rating>;
  schedulePublishSneaker?: Maybe<Sneaker>;
  scheduleUnpublishAsset?: Maybe<Asset>;
  scheduleUnpublishBrand?: Maybe<Brand>;
  scheduleUnpublishCategory?: Maybe<Category>;
  scheduleUnpublishRating?: Maybe<Rating>;
  scheduleUnpublishSneaker?: Maybe<Sneaker>;
  unpublishAsset?: Maybe<Asset>;
  unpublishBrand?: Maybe<Brand>;
  unpublishCategory?: Maybe<Category>;
  /** @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection) */
  unpublishManyAssets: BatchPayload;
  unpublishManyAssetsConnection: AssetConnection;
  /** @deprecated Please use the new paginated many mutation (unpublishManyBrandsConnection) */
  unpublishManyBrands: BatchPayload;
  unpublishManyBrandsConnection: BrandConnection;
  /** @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection) */
  unpublishManyCategories: BatchPayload;
  unpublishManyCategoriesConnection: CategoryConnection;
  /** @deprecated Please use the new paginated many mutation (unpublishManyRatingsConnection) */
  unpublishManyRatings: BatchPayload;
  unpublishManyRatingsConnection: RatingConnection;
  /** @deprecated Please use the new paginated many mutation (unpublishManySneakersConnection) */
  unpublishManySneakers: BatchPayload;
  unpublishManySneakersConnection: SneakerConnection;
  unpublishRating?: Maybe<Rating>;
  unpublishSneaker?: Maybe<Sneaker>;
  updateAsset?: Maybe<Asset>;
  updateBrand?: Maybe<Brand>;
  updateCategory?: Maybe<Category>;
  /** @deprecated Please use the new paginated many mutation (updateManyAssetsConnection) */
  updateManyAssets: BatchPayload;
  updateManyAssetsConnection: AssetConnection;
  /** @deprecated Please use the new paginated many mutation (updateManyBrandsConnection) */
  updateManyBrands: BatchPayload;
  updateManyBrandsConnection: BrandConnection;
  /** @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection) */
  updateManyCategories: BatchPayload;
  updateManyCategoriesConnection: CategoryConnection;
  /** @deprecated Please use the new paginated many mutation (updateManyRatingsConnection) */
  updateManyRatings: BatchPayload;
  updateManyRatingsConnection: RatingConnection;
  /** @deprecated Please use the new paginated many mutation (updateManySneakersConnection) */
  updateManySneakers: BatchPayload;
  updateManySneakersConnection: SneakerConnection;
  updateRating?: Maybe<Rating>;
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  updateSneaker?: Maybe<Sneaker>;
  upsertAsset?: Maybe<Asset>;
  upsertBrand?: Maybe<Brand>;
  upsertCategory?: Maybe<Category>;
  upsertRating?: Maybe<Rating>;
  upsertSneaker?: Maybe<Sneaker>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateBrandArgs = {
  data: BrandCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateRatingArgs = {
  data: RatingCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSneakerArgs = {
  data: SneakerCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteBrandArgs = {
  where: BrandWhereUniqueInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyBrandsArgs = {
  where?: InputMaybe<BrandManyWhereInput>;
};


export type MutationDeleteManyBrandsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BrandManyWhereInput>;
};


export type MutationDeleteManyCategoriesArgs = {
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyRatingsArgs = {
  where?: InputMaybe<RatingManyWhereInput>;
};


export type MutationDeleteManyRatingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RatingManyWhereInput>;
};


export type MutationDeleteManySneakersArgs = {
  where?: InputMaybe<SneakerManyWhereInput>;
};


export type MutationDeleteManySneakersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SneakerManyWhereInput>;
};


export type MutationDeleteRatingArgs = {
  where: RatingWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSneakerArgs = {
  where: SneakerWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishBrandArgs = {
  to?: Array<Stage>;
  where: BrandWhereUniqueInput;
};


export type MutationPublishCategoryArgs = {
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyBrandsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<BrandManyWhereInput>;
};


export type MutationPublishManyBrandsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<BrandManyWhereInput>;
};


export type MutationPublishManyCategoriesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationPublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationPublishManyRatingsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<RatingManyWhereInput>;
};


export type MutationPublishManyRatingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<RatingManyWhereInput>;
};


export type MutationPublishManySneakersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SneakerManyWhereInput>;
};


export type MutationPublishManySneakersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<SneakerManyWhereInput>;
};


export type MutationPublishRatingArgs = {
  to?: Array<Stage>;
  where: RatingWhereUniqueInput;
};


export type MutationPublishSneakerArgs = {
  to?: Array<Stage>;
  where: SneakerWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishBrandArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: BrandWhereUniqueInput;
};


export type MutationSchedulePublishCategoryArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationSchedulePublishRatingArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: RatingWhereUniqueInput;
};


export type MutationSchedulePublishSneakerArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: SneakerWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishBrandArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: BrandWhereUniqueInput;
};


export type MutationScheduleUnpublishCategoryArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: CategoryWhereUniqueInput;
};


export type MutationScheduleUnpublishRatingArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: RatingWhereUniqueInput;
};


export type MutationScheduleUnpublishSneakerArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: SneakerWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishBrandArgs = {
  from?: Array<Stage>;
  where: BrandWhereUniqueInput;
};


export type MutationUnpublishCategoryArgs = {
  from?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyBrandsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<BrandManyWhereInput>;
};


export type MutationUnpublishManyBrandsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<BrandManyWhereInput>;
};


export type MutationUnpublishManyCategoriesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyRatingsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<RatingManyWhereInput>;
};


export type MutationUnpublishManyRatingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<RatingManyWhereInput>;
};


export type MutationUnpublishManySneakersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SneakerManyWhereInput>;
};


export type MutationUnpublishManySneakersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SneakerManyWhereInput>;
};


export type MutationUnpublishRatingArgs = {
  from?: Array<Stage>;
  where: RatingWhereUniqueInput;
};


export type MutationUnpublishSneakerArgs = {
  from?: Array<Stage>;
  where: SneakerWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateBrandArgs = {
  data: BrandUpdateInput;
  where: BrandWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyBrandsArgs = {
  data: BrandUpdateManyInput;
  where?: InputMaybe<BrandManyWhereInput>;
};


export type MutationUpdateManyBrandsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: BrandUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BrandManyWhereInput>;
};


export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyInput;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: CategoryUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyRatingsArgs = {
  data: RatingUpdateManyInput;
  where?: InputMaybe<RatingManyWhereInput>;
};


export type MutationUpdateManyRatingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: RatingUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RatingManyWhereInput>;
};


export type MutationUpdateManySneakersArgs = {
  data: SneakerUpdateManyInput;
  where?: InputMaybe<SneakerManyWhereInput>;
};


export type MutationUpdateManySneakersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: SneakerUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SneakerManyWhereInput>;
};


export type MutationUpdateRatingArgs = {
  data: RatingUpdateInput;
  where: RatingWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSneakerArgs = {
  data: SneakerUpdateInput;
  where: SneakerWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertBrandArgs = {
  upsert: BrandUpsertInput;
  where: BrandWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  upsert: CategoryUpsertInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertRatingArgs = {
  upsert: RatingUpsertInput;
  where: RatingWhereUniqueInput;
};


export type MutationUpsertSneakerArgs = {
  upsert: SneakerUpsertInput;
  where: SneakerWhereUniqueInput;
};

export type Node = {
  id: Scalars['ID']['output'];
  stage: Stage;
};

export type PageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  pageSize?: Maybe<Scalars['Int']['output']>;
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PublishLocaleInput = {
  locale: Locale;
  stages: Array<Stage>;
};

export type Query = {
  asset?: Maybe<Asset>;
  assetVersion?: Maybe<DocumentVersion>;
  assets: Array<Asset>;
  assetsConnection: AssetConnection;
  brand?: Maybe<Brand>;
  brandVersion?: Maybe<DocumentVersion>;
  brands: Array<Brand>;
  brandsConnection: BrandConnection;
  categories: Array<Category>;
  categoriesConnection: CategoryConnection;
  category?: Maybe<Category>;
  categoryVersion?: Maybe<DocumentVersion>;
  entities?: Maybe<Array<Entity>>;
  node?: Maybe<Node>;
  rating?: Maybe<Rating>;
  ratingVersion?: Maybe<DocumentVersion>;
  ratings: Array<Rating>;
  ratingsConnection: RatingConnection;
  scheduledOperation?: Maybe<ScheduledOperation>;
  scheduledOperations: Array<ScheduledOperation>;
  scheduledOperationsConnection: ScheduledOperationConnection;
  scheduledRelease?: Maybe<ScheduledRelease>;
  scheduledReleases: Array<ScheduledRelease>;
  scheduledReleasesConnection: ScheduledReleaseConnection;
  sneaker?: Maybe<Sneaker>;
  sneakerVersion?: Maybe<DocumentVersion>;
  sneakers: Array<Sneaker>;
  sneakersConnection: SneakerConnection;
  user?: Maybe<User>;
  users: Array<User>;
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryBrandArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BrandWhereUniqueInput;
};


export type QueryBrandVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBrandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BrandOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<BrandWhereInput>;
};


export type QueryBrandsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BrandOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<BrandWhereInput>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CategoryWhereUniqueInput;
};


export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryRatingArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: RatingWhereUniqueInput;
};


export type QueryRatingVersionArgs = {
  where: VersionWhereInput;
};


export type QueryRatingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<RatingOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<RatingWhereInput>;
};


export type QueryRatingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<RatingOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<RatingWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySneakerArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SneakerWhereUniqueInput;
};


export type QuerySneakerVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySneakersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SneakerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SneakerWhereInput>;
};


export type QuerySneakersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SneakerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SneakerWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type Rgba = {
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

export type Rating = Entity & Node & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  documentInStages: Array<Rating>;
  history: Array<Version>;
  id: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  sneaker?: Maybe<Sneaker>;
  stage: Stage;
  stars?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
};


export type RatingCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type RatingDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type RatingHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type RatingPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type RatingScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type RatingSneakerArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type RatingUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type RatingConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: RatingWhereUniqueInput;
};

export type RatingConnection = {
  aggregate: Aggregate;
  edges: Array<RatingEdge>;
  pageInfo: PageInfo;
};

export type RatingCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  sneaker?: InputMaybe<SneakerCreateOneInlineInput>;
  stars?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RatingCreateManyInlineInput = {
  connect?: InputMaybe<Array<RatingWhereUniqueInput>>;
  create?: InputMaybe<Array<RatingCreateInput>>;
};

export type RatingCreateOneInlineInput = {
  connect?: InputMaybe<RatingWhereUniqueInput>;
  create?: InputMaybe<RatingCreateInput>;
};

export type RatingEdge = {
  cursor: Scalars['String']['output'];
  node: Rating;
};

export type RatingManyWhereInput = {
  AND?: InputMaybe<Array<RatingWhereInput>>;
  NOT?: InputMaybe<Array<RatingWhereInput>>;
  OR?: InputMaybe<Array<RatingWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<RatingWhereStageInput>;
  documentInStages_none?: InputMaybe<RatingWhereStageInput>;
  documentInStages_some?: InputMaybe<RatingWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  sneaker?: InputMaybe<SneakerWhereInput>;
  stars?: InputMaybe<Scalars['Float']['input']>;
  stars_gt?: InputMaybe<Scalars['Float']['input']>;
  stars_gte?: InputMaybe<Scalars['Float']['input']>;
  stars_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  stars_lt?: InputMaybe<Scalars['Float']['input']>;
  stars_lte?: InputMaybe<Scalars['Float']['input']>;
  stars_not?: InputMaybe<Scalars['Float']['input']>;
  stars_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum RatingOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StarsAsc = 'stars_ASC',
  StarsDesc = 'stars_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RatingUpdateInput = {
  sneaker?: InputMaybe<SneakerUpdateOneInlineInput>;
  stars?: InputMaybe<Scalars['Float']['input']>;
};

export type RatingUpdateManyInlineInput = {
  connect?: InputMaybe<Array<RatingConnectInput>>;
  create?: InputMaybe<Array<RatingCreateInput>>;
  delete?: InputMaybe<Array<RatingWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<RatingWhereUniqueInput>>;
  set?: InputMaybe<Array<RatingWhereUniqueInput>>;
  update?: InputMaybe<Array<RatingUpdateWithNestedWhereUniqueInput>>;
  upsert?: InputMaybe<Array<RatingUpsertWithNestedWhereUniqueInput>>;
};

export type RatingUpdateManyInput = {
  stars?: InputMaybe<Scalars['Float']['input']>;
};

export type RatingUpdateManyWithNestedWhereInput = {
  data: RatingUpdateManyInput;
  where: RatingWhereInput;
};

export type RatingUpdateOneInlineInput = {
  connect?: InputMaybe<RatingWhereUniqueInput>;
  create?: InputMaybe<RatingCreateInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<RatingUpdateWithNestedWhereUniqueInput>;
  upsert?: InputMaybe<RatingUpsertWithNestedWhereUniqueInput>;
};

export type RatingUpdateWithNestedWhereUniqueInput = {
  data: RatingUpdateInput;
  where: RatingWhereUniqueInput;
};

export type RatingUpsertInput = {
  create: RatingCreateInput;
  update: RatingUpdateInput;
};

export type RatingUpsertWithNestedWhereUniqueInput = {
  data: RatingUpsertInput;
  where: RatingWhereUniqueInput;
};

export type RatingWhereComparatorInput = {
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RatingWhereInput = {
  AND?: InputMaybe<Array<RatingWhereInput>>;
  NOT?: InputMaybe<Array<RatingWhereInput>>;
  OR?: InputMaybe<Array<RatingWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<RatingWhereStageInput>;
  documentInStages_none?: InputMaybe<RatingWhereStageInput>;
  documentInStages_some?: InputMaybe<RatingWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  sneaker?: InputMaybe<SneakerWhereInput>;
  stars?: InputMaybe<Scalars['Float']['input']>;
  stars_gt?: InputMaybe<Scalars['Float']['input']>;
  stars_gte?: InputMaybe<Scalars['Float']['input']>;
  stars_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  stars_lt?: InputMaybe<Scalars['Float']['input']>;
  stars_lte?: InputMaybe<Scalars['Float']['input']>;
  stars_not?: InputMaybe<Scalars['Float']['input']>;
  stars_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type RatingWhereStageInput = {
  AND?: InputMaybe<Array<RatingWhereStageInput>>;
  NOT?: InputMaybe<Array<RatingWhereStageInput>>;
  OR?: InputMaybe<Array<RatingWhereStageInput>>;
  compareWithParent?: InputMaybe<RatingWhereComparatorInput>;
  stage?: InputMaybe<Stage>;
};

export type RatingWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type RichText = {
  html: Scalars['String']['output'];
  markdown: Scalars['String']['output'];
  raw: Scalars['RichTextAST']['output'];
  text: Scalars['String']['output'];
};

export type ScheduledOperation = Entity & Node & {
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  documentInStages: Array<ScheduledOperation>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedBy?: Maybe<User>;
  rawPayload: Scalars['Json']['output'];
  release?: Maybe<ScheduledRelease>;
  stage: Stage;
  status: ScheduledOperationStatus;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
};


export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Brand | Category | Rating | Sneaker;

export type ScheduledOperationConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: ScheduledOperationWhereUniqueInput;
};

export type ScheduledOperationConnection = {
  aggregate: Aggregate;
  edges: Array<ScheduledOperationEdge>;
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

export type ScheduledOperationEdge = {
  cursor: Scalars['String']['output'];
  node: ScheduledOperation;
};

export type ScheduledOperationManyWhereInput = {
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  status_not?: InputMaybe<ScheduledOperationStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ScheduledOperationWhereInput = {
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  status_not?: InputMaybe<ScheduledOperationStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ScheduledRelease = Entity & Node & {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  documentInStages: Array<ScheduledRelease>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isImplicit: Scalars['Boolean']['output'];
  operations: Array<ScheduledOperation>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedBy?: Maybe<User>;
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  stage: Stage;
  status: ScheduledReleaseStatus;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
};


export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseConnection = {
  aggregate: Aggregate;
  edges: Array<ScheduledReleaseEdge>;
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

export type ScheduledReleaseEdge = {
  cursor: Scalars['String']['output'];
  node: ScheduledRelease;
};

export type ScheduledReleaseManyWhereInput = {
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  data: ScheduledReleaseUpdateManyInput;
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  create: ScheduledReleaseCreateInput;
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  data: ScheduledReleaseUpsertInput;
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseWhereInput = {
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Sneaker = Entity & Node & {
  brand?: Maybe<Brand>;
  category?: Maybe<Category>;
  coverImg: Asset;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  documentInStages: Array<Sneaker>;
  highlightImages: Array<Asset>;
  history: Array<Version>;
  id: Scalars['ID']['output'];
  images: Array<Asset>;
  isFeature?: Maybe<Scalars['Boolean']['output']>;
  isTrending?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedBy?: Maybe<User>;
  quantity: Scalars['Int']['output'];
  ratings: Array<Rating>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  stage: Stage;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<User>;
};


export type SneakerBrandArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SneakerCategoryArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SneakerCoverImgArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SneakerCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SneakerDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type SneakerHighlightImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type SneakerHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type SneakerImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type SneakerPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SneakerRatingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<RatingOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RatingWhereInput>;
};


export type SneakerScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type SneakerUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SneakerConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: SneakerWhereUniqueInput;
};

export type SneakerConnection = {
  aggregate: Aggregate;
  edges: Array<SneakerEdge>;
  pageInfo: PageInfo;
};

export type SneakerCreateInput = {
  brand?: InputMaybe<BrandCreateOneInlineInput>;
  category?: InputMaybe<CategoryCreateOneInlineInput>;
  coverImg: AssetCreateOneInlineInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  highlightImages?: InputMaybe<AssetCreateManyInlineInput>;
  images?: InputMaybe<AssetCreateManyInlineInput>;
  isFeature?: InputMaybe<Scalars['Boolean']['input']>;
  isTrending?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  quantity: Scalars['Int']['input'];
  ratings?: InputMaybe<RatingCreateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SneakerCreateManyInlineInput = {
  connect?: InputMaybe<Array<SneakerWhereUniqueInput>>;
  create?: InputMaybe<Array<SneakerCreateInput>>;
};

export type SneakerCreateOneInlineInput = {
  connect?: InputMaybe<SneakerWhereUniqueInput>;
  create?: InputMaybe<SneakerCreateInput>;
};

export type SneakerEdge = {
  cursor: Scalars['String']['output'];
  node: Sneaker;
};

export type SneakerManyWhereInput = {
  AND?: InputMaybe<Array<SneakerWhereInput>>;
  NOT?: InputMaybe<Array<SneakerWhereInput>>;
  OR?: InputMaybe<Array<SneakerWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<BrandWhereInput>;
  category?: InputMaybe<CategoryWhereInput>;
  coverImg?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<SneakerWhereStageInput>;
  documentInStages_none?: InputMaybe<SneakerWhereStageInput>;
  documentInStages_some?: InputMaybe<SneakerWhereStageInput>;
  highlightImages_every?: InputMaybe<AssetWhereInput>;
  highlightImages_none?: InputMaybe<AssetWhereInput>;
  highlightImages_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  isFeature?: InputMaybe<Scalars['Boolean']['input']>;
  isFeature_not?: InputMaybe<Scalars['Boolean']['input']>;
  isTrending?: InputMaybe<Scalars['Boolean']['input']>;
  isTrending_not?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  quantity_gt?: InputMaybe<Scalars['Int']['input']>;
  quantity_gte?: InputMaybe<Scalars['Int']['input']>;
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quantity_lt?: InputMaybe<Scalars['Int']['input']>;
  quantity_lte?: InputMaybe<Scalars['Int']['input']>;
  quantity_not?: InputMaybe<Scalars['Int']['input']>;
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ratings_every?: InputMaybe<RatingWhereInput>;
  ratings_none?: InputMaybe<RatingWhereInput>;
  ratings_some?: InputMaybe<RatingWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SneakerOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsFeatureAsc = 'isFeature_ASC',
  IsFeatureDesc = 'isFeature_DESC',
  IsTrendingAsc = 'isTrending_ASC',
  IsTrendingDesc = 'isTrending_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SneakerUpdateInput = {
  brand?: InputMaybe<BrandUpdateOneInlineInput>;
  category?: InputMaybe<CategoryUpdateOneInlineInput>;
  coverImg?: InputMaybe<AssetUpdateOneInlineInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  highlightImages?: InputMaybe<AssetUpdateManyInlineInput>;
  images?: InputMaybe<AssetUpdateManyInlineInput>;
  isFeature?: InputMaybe<Scalars['Boolean']['input']>;
  isTrending?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  ratings?: InputMaybe<RatingUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type SneakerUpdateManyInlineInput = {
  connect?: InputMaybe<Array<SneakerConnectInput>>;
  create?: InputMaybe<Array<SneakerCreateInput>>;
  delete?: InputMaybe<Array<SneakerWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<SneakerWhereUniqueInput>>;
  set?: InputMaybe<Array<SneakerWhereUniqueInput>>;
  update?: InputMaybe<Array<SneakerUpdateWithNestedWhereUniqueInput>>;
  upsert?: InputMaybe<Array<SneakerUpsertWithNestedWhereUniqueInput>>;
};

export type SneakerUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  isFeature?: InputMaybe<Scalars['Boolean']['input']>;
  isTrending?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type SneakerUpdateManyWithNestedWhereInput = {
  data: SneakerUpdateManyInput;
  where: SneakerWhereInput;
};

export type SneakerUpdateOneInlineInput = {
  connect?: InputMaybe<SneakerWhereUniqueInput>;
  create?: InputMaybe<SneakerCreateInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<SneakerUpdateWithNestedWhereUniqueInput>;
  upsert?: InputMaybe<SneakerUpsertWithNestedWhereUniqueInput>;
};

export type SneakerUpdateWithNestedWhereUniqueInput = {
  data: SneakerUpdateInput;
  where: SneakerWhereUniqueInput;
};

export type SneakerUpsertInput = {
  create: SneakerCreateInput;
  update: SneakerUpdateInput;
};

export type SneakerUpsertWithNestedWhereUniqueInput = {
  data: SneakerUpsertInput;
  where: SneakerWhereUniqueInput;
};

export type SneakerWhereComparatorInput = {
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SneakerWhereInput = {
  AND?: InputMaybe<Array<SneakerWhereInput>>;
  NOT?: InputMaybe<Array<SneakerWhereInput>>;
  OR?: InputMaybe<Array<SneakerWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<BrandWhereInput>;
  category?: InputMaybe<CategoryWhereInput>;
  coverImg?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<SneakerWhereStageInput>;
  documentInStages_none?: InputMaybe<SneakerWhereStageInput>;
  documentInStages_some?: InputMaybe<SneakerWhereStageInput>;
  highlightImages_every?: InputMaybe<AssetWhereInput>;
  highlightImages_none?: InputMaybe<AssetWhereInput>;
  highlightImages_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  isFeature?: InputMaybe<Scalars['Boolean']['input']>;
  isFeature_not?: InputMaybe<Scalars['Boolean']['input']>;
  isTrending?: InputMaybe<Scalars['Boolean']['input']>;
  isTrending_not?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  quantity_gt?: InputMaybe<Scalars['Int']['input']>;
  quantity_gte?: InputMaybe<Scalars['Int']['input']>;
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quantity_lt?: InputMaybe<Scalars['Int']['input']>;
  quantity_lte?: InputMaybe<Scalars['Int']['input']>;
  quantity_not?: InputMaybe<Scalars['Int']['input']>;
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  ratings_every?: InputMaybe<RatingWhereInput>;
  ratings_none?: InputMaybe<RatingWhereInput>;
  ratings_some?: InputMaybe<RatingWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type SneakerWhereStageInput = {
  AND?: InputMaybe<Array<SneakerWhereStageInput>>;
  NOT?: InputMaybe<Array<SneakerWhereStageInput>>;
  OR?: InputMaybe<Array<SneakerWhereStageInput>>;
  compareWithParent?: InputMaybe<SneakerWhereComparatorInput>;
  stage?: InputMaybe<Stage>;
};

export type SneakerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum Stage {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  locale: Locale;
  stages: Array<Stage>;
};

export type User = Entity & Node & {
  createdAt: Scalars['DateTime']['output'];
  documentInStages: Array<User>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  kind: UserKind;
  name: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stage: Stage;
  updatedAt: Scalars['DateTime']['output'];
};


export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  position?: InputMaybe<ConnectPositionInput>;
  where: UserWhereUniqueInput;
};

export type UserConnection = {
  aggregate: Aggregate;
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserEdge = {
  cursor: Scalars['String']['output'];
  node: User;
};

export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

export type UserManyWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  kind_not?: InputMaybe<UserKind>;
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  picture_not?: InputMaybe<Scalars['String']['input']>;
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserWhereComparatorInput = {
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  kind_not?: InputMaybe<UserKind>;
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  picture_not?: InputMaybe<Scalars['String']['input']>;
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type UserWhereStageInput = {
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  stage?: InputMaybe<Stage>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { categories: Array<{ id: string, name: string, title: string, coverImg: { url: string } }> };

export type GetOtherSneakersQueryVariables = Exact<{
  brandId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetOtherSneakersQuery = { sneakers: Array<{ id: string, name: string, description?: string | null, price: number, quantity: number, slug?: string | null, brand?: { id: string, name: string } | null, category?: { slug?: string | null, name: string } | null, coverImg: { url: string }, images: Array<{ url: string }>, ratings: Array<{ stars?: number | null }> }> };

export type GetSneakerQueryVariables = Exact<{
  productId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetSneakerQuery = { sneaker?: { id: string, name: string, description?: string | null, price: number, quantity: number, slug?: string | null, brand?: { id: string, name: string } | null, category?: { slug?: string | null, name: string } | null, coverImg: { url: string }, images: Array<{ url: string }>, ratings: Array<{ stars?: number | null }> } | null };

export type GetSneakersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSneakersQuery = { sneakers: Array<{ id: string, name: string, price: number, quantity: number, slug?: string | null, brand?: { id: string, name: string } | null, category?: { name: string } | null, coverImg: { url: string }, images: Array<{ url: string }>, ratings: Array<{ stars?: number | null }> }> };



export const GetCategoriesDocument = /*#__PURE__*/ `
    query GetCategories {
  categories {
    id
    name
    title
    coverImg {
      url
    }
  }
}
    `;

export const useGetCategoriesQuery = <
      TData = GetCategoriesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCategoriesQueryVariables,
      options?: UseQueryOptions<GetCategoriesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetCategoriesQuery, TError, TData>(
      variables === undefined ? ['GetCategories'] : ['GetCategories', variables],
      fetcher<GetCategoriesQuery, GetCategoriesQueryVariables>(client, GetCategoriesDocument, variables, headers),
      options
    )};

useGetCategoriesQuery.document = GetCategoriesDocument;

useGetCategoriesQuery.getKey = (variables?: GetCategoriesQueryVariables) => variables === undefined ? ['GetCategories'] : ['GetCategories', variables];

export const useInfiniteGetCategoriesQuery = <
      TData = GetCategoriesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCategoriesQueryVariables,
      options?: UseInfiniteQueryOptions<GetCategoriesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useInfiniteQuery<GetCategoriesQuery, TError, TData>(
      variables === undefined ? ['GetCategories.infinite'] : ['GetCategories.infinite', variables],
      (metaData) => fetcher<GetCategoriesQuery, GetCategoriesQueryVariables>(client, GetCategoriesDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    )};

useInfiniteGetCategoriesQuery.getKey = (variables?: GetCategoriesQueryVariables) => variables === undefined ? ['GetCategories.infinite'] : ['GetCategories.infinite', variables];


useGetCategoriesQuery.fetcher = (client: GraphQLClient, variables?: GetCategoriesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetCategoriesQuery, GetCategoriesQueryVariables>(client, GetCategoriesDocument, variables, headers);

export const GetOtherSneakersDocument = /*#__PURE__*/ `
    query GetOtherSneakers($brandId: ID) {
  sneakers(where: {brand: {id: $brandId}}) {
    id
    name
    description
    price
    quantity
    slug
    brand {
      id
      name
    }
    category {
      slug
      name
    }
    coverImg {
      url
    }
    images {
      url
    }
    ratings {
      stars
    }
  }
}
    `;

export const useGetOtherSneakersQuery = <
      TData = GetOtherSneakersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetOtherSneakersQueryVariables,
      options?: UseQueryOptions<GetOtherSneakersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetOtherSneakersQuery, TError, TData>(
      variables === undefined ? ['GetOtherSneakers'] : ['GetOtherSneakers', variables],
      fetcher<GetOtherSneakersQuery, GetOtherSneakersQueryVariables>(client, GetOtherSneakersDocument, variables, headers),
      options
    )};

useGetOtherSneakersQuery.document = GetOtherSneakersDocument;

useGetOtherSneakersQuery.getKey = (variables?: GetOtherSneakersQueryVariables) => variables === undefined ? ['GetOtherSneakers'] : ['GetOtherSneakers', variables];

export const useInfiniteGetOtherSneakersQuery = <
      TData = GetOtherSneakersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetOtherSneakersQueryVariables,
      options?: UseInfiniteQueryOptions<GetOtherSneakersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useInfiniteQuery<GetOtherSneakersQuery, TError, TData>(
      variables === undefined ? ['GetOtherSneakers.infinite'] : ['GetOtherSneakers.infinite', variables],
      (metaData) => fetcher<GetOtherSneakersQuery, GetOtherSneakersQueryVariables>(client, GetOtherSneakersDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    )};

useInfiniteGetOtherSneakersQuery.getKey = (variables?: GetOtherSneakersQueryVariables) => variables === undefined ? ['GetOtherSneakers.infinite'] : ['GetOtherSneakers.infinite', variables];


useGetOtherSneakersQuery.fetcher = (client: GraphQLClient, variables?: GetOtherSneakersQueryVariables, headers?: RequestInit['headers']) => fetcher<GetOtherSneakersQuery, GetOtherSneakersQueryVariables>(client, GetOtherSneakersDocument, variables, headers);

export const GetSneakerDocument = /*#__PURE__*/ `
    query GetSneaker($productId: String) {
  sneaker(where: {slug: $productId}) {
    id
    name
    description
    price
    quantity
    slug
    brand {
      id
      name
    }
    category {
      slug
      name
    }
    coverImg {
      url
    }
    images {
      url
    }
    ratings {
      stars
    }
  }
}
    `;

export const useGetSneakerQuery = <
      TData = GetSneakerQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetSneakerQueryVariables,
      options?: UseQueryOptions<GetSneakerQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetSneakerQuery, TError, TData>(
      variables === undefined ? ['GetSneaker'] : ['GetSneaker', variables],
      fetcher<GetSneakerQuery, GetSneakerQueryVariables>(client, GetSneakerDocument, variables, headers),
      options
    )};

useGetSneakerQuery.document = GetSneakerDocument;

useGetSneakerQuery.getKey = (variables?: GetSneakerQueryVariables) => variables === undefined ? ['GetSneaker'] : ['GetSneaker', variables];

export const useInfiniteGetSneakerQuery = <
      TData = GetSneakerQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetSneakerQueryVariables,
      options?: UseInfiniteQueryOptions<GetSneakerQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useInfiniteQuery<GetSneakerQuery, TError, TData>(
      variables === undefined ? ['GetSneaker.infinite'] : ['GetSneaker.infinite', variables],
      (metaData) => fetcher<GetSneakerQuery, GetSneakerQueryVariables>(client, GetSneakerDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    )};

useInfiniteGetSneakerQuery.getKey = (variables?: GetSneakerQueryVariables) => variables === undefined ? ['GetSneaker.infinite'] : ['GetSneaker.infinite', variables];


useGetSneakerQuery.fetcher = (client: GraphQLClient, variables?: GetSneakerQueryVariables, headers?: RequestInit['headers']) => fetcher<GetSneakerQuery, GetSneakerQueryVariables>(client, GetSneakerDocument, variables, headers);

export const GetSneakersDocument = /*#__PURE__*/ `
    query GetSneakers {
  sneakers {
    id
    name
    price
    quantity
    slug
    brand {
      id
      name
    }
    category {
      name
    }
    coverImg {
      url
    }
    images {
      url
    }
    ratings {
      stars
    }
  }
}
    `;

export const useGetSneakersQuery = <
      TData = GetSneakersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetSneakersQueryVariables,
      options?: UseQueryOptions<GetSneakersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetSneakersQuery, TError, TData>(
      variables === undefined ? ['GetSneakers'] : ['GetSneakers', variables],
      fetcher<GetSneakersQuery, GetSneakersQueryVariables>(client, GetSneakersDocument, variables, headers),
      options
    )};

useGetSneakersQuery.document = GetSneakersDocument;

useGetSneakersQuery.getKey = (variables?: GetSneakersQueryVariables) => variables === undefined ? ['GetSneakers'] : ['GetSneakers', variables];

export const useInfiniteGetSneakersQuery = <
      TData = GetSneakersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetSneakersQueryVariables,
      options?: UseInfiniteQueryOptions<GetSneakersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useInfiniteQuery<GetSneakersQuery, TError, TData>(
      variables === undefined ? ['GetSneakers.infinite'] : ['GetSneakers.infinite', variables],
      (metaData) => fetcher<GetSneakersQuery, GetSneakersQueryVariables>(client, GetSneakersDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    )};

useInfiniteGetSneakersQuery.getKey = (variables?: GetSneakersQueryVariables) => variables === undefined ? ['GetSneakers.infinite'] : ['GetSneakers.infinite', variables];


useGetSneakersQuery.fetcher = (client: GraphQLClient, variables?: GetSneakersQueryVariables, headers?: RequestInit['headers']) => fetcher<GetSneakersQuery, GetSneakersQueryVariables>(client, GetSneakersDocument, variables, headers);
