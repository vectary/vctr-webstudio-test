update-scripts:
	rm -rf app/constants.mjs || true && \
	cp app/_constants.mjs app/constants.mjs && \
	rm -rf app/index.tsx || true && \
	cp app/routes-index.tsx app/routes/index.tsx
