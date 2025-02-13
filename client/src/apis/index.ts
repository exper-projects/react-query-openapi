/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * React Query - OpenAPI
 * Experiments with React Query, OpenAPI and Mongoose
 * OpenAPI spec version: 1.0
 */
import { useMutation } from "@tanstack/react-query";
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { customClient } from "./custom-client";
export interface UpdateUserPayload {
  [key: string]: unknown;
}

export interface ObjectId {
  [key: string]: unknown;
}

export interface UserDto {
  _id: ObjectId;
  age: number;
  dateOfBirth: string;
  email: string;
  name: string;
  password: string;
}

export interface CreateUserPayload {
  [key: string]: unknown;
}

/**
 * @summary Create a new user
 */
export const createUser = (createUserPayload: CreateUserPayload) => {
  return customClient<UserDto>({
    url: `/api/user`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: createUserPayload,
  });
};

export const getCreateUserMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createUser>>,
    TError,
    { data: CreateUserPayload },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createUser>>,
  TError,
  { data: CreateUserPayload },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createUser>>,
    { data: CreateUserPayload }
  > = (props) => {
    const { data } = props ?? {};

    return createUser(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreateUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof createUser>>
>;
export type CreateUserMutationBody = CreateUserPayload;
export type CreateUserMutationError = unknown;

/**
 * @summary Create a new user
 */
export const useCreateUser = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createUser>>,
    TError,
    { data: CreateUserPayload },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof createUser>>,
  TError,
  { data: CreateUserPayload },
  TContext
> => {
  const mutationOptions = getCreateUserMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary Update a user
 */
export const updateUser = (
  email: string,
  updateUserPayload: UpdateUserPayload
) => {
  return customClient<UserDto>({
    url: `/api/user/${email}`,
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    data: updateUserPayload,
  });
};

export const getUpdateUserMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateUser>>,
    TError,
    { email: string; data: UpdateUserPayload },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateUser>>,
  TError,
  { email: string; data: UpdateUserPayload },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateUser>>,
    { email: string; data: UpdateUserPayload }
  > = (props) => {
    const { email, data } = props ?? {};

    return updateUser(email, data);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateUser>>
>;
export type UpdateUserMutationBody = UpdateUserPayload;
export type UpdateUserMutationError = unknown;

/**
 * @summary Update a user
 */
export const useUpdateUser = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateUser>>,
    TError,
    { email: string; data: UpdateUserPayload },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof updateUser>>,
  TError,
  { email: string; data: UpdateUserPayload },
  TContext
> => {
  const mutationOptions = getUpdateUserMutationOptions(options);

  return useMutation(mutationOptions);
};
