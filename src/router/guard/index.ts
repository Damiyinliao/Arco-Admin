import type { Router } from 'vue-router';
import setupPermissionGuard from './permission';

export default function setupGuard(router: Router) {
  setupPermissionGuard(router);
}
