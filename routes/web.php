<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\FileController;

Route::get('/', function () {
    return Inertia::render('Home', [
        'files' => \App\Models\UploadedFile::all(),
    ]);
});

Route::prefix('admin')->group(function () {
    Route::get('/', fn () => Inertia::render('Admin/Admin'));
    Route::get('/files', [FileController::class, 'index']);
    Route::get('/files/create', [FileController::class, 'create']);
    Route::get('/admin/files', [FileController::class, 'index']);
    Route::post('/files', [FileController::class, 'store']);
});

Route::get('/admin/files', [FileController::class, 'index'])->name('admin.files.index');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';










