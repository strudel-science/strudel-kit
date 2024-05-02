// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/compare-data`
  | `/compare-data/compare`
  | `/compare-data/new`
  | `/contribute-data`
  | `/contribute-data/new`
  | `/contribute-data/portal`
  | `/contribute-data/review`
  | `/explore-data`
  | `/explore-data/:id`
  | `/monitor-activities`
  | `/monitor-activities/calendar`
  | `/monitor-activities/detail`
  | `/playground`
  | `/run-computation`
  | `/run-computation/:id/data-inputs`
  | `/run-computation/:id/results`
  | `/run-computation/:id/running`
  | `/run-computation/:id/settings`
  | `/search-data-repositories`
  | `/search-data-repositories/:id`

export type Params = {
  '/explore-data/:id': { id: string }
  '/run-computation/:id/data-inputs': { id: string }
  '/run-computation/:id/results': { id: string }
  '/run-computation/:id/running': { id: string }
  '/run-computation/:id/settings': { id: string }
  '/search-data-repositories/:id': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
