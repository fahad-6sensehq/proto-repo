# @contracts/proto

Shared gRPC contracts for auth-service and user-service.

Repo: [github.com/fahad-6sensehq/proto-repo](https://github.com/fahad-6sensehq/proto-repo)

## Services

| Package | Proto | RPCs |
| --- | --- | --- |
| `app.v1` | `proto/app/v1/app.proto` | `AppService.GetHealth` |
| `user.v1` | `proto/user/v1/user.proto` | `CreateUser`, `GetUserByEmail`, `ValidateCredentials` |
| `auth.v1` | `proto/auth/v1/auth.proto` | `AuthService.Register`, `Login` |

TypeScript types and proto paths are exported from `index.js` / `index.d.ts`.

## Install

```bash
pnpm add @contracts/proto@github:fahad-6sensehq/proto-repo
```

```ts
import { USER_PACKAGE, USER_PROTO_PATH, USER_SERVICE_NAME } from '@contracts/proto';
```

Nest gRPC server/client options should use the exported `*_PACKAGE` and `*_PROTO_PATH` constants so every service loads the same `.proto` files.
