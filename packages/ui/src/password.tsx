"use client";

export const Password = () => {
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Password
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="password"
          placeholder="******************"
        />
        <p className="text-gray-600 text-xs italic">
          Make it as long and as crazy as you'd like
        </p>
      </div>
    </div>
  );
};
