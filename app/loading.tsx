// app/loading.tsx
export default function Loading() {
    return (
        <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        </div>
    );
}
